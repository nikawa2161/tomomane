import { FC, useContext } from 'react'
import { ReactIcon } from 'ReactIcon/icon'
import { FriendContext } from 'providers/FriendProvider'
import { dbFireStore } from '../../../firebase'

import { NavLink } from 'react-router-dom'
import { doc, updateDoc } from 'firebase/firestore'

export const FriendHome: FC = () => {
  type FriendType = {
    id: string
    name: string
    image: string
    category: string
    favorite: boolean
  }
  type FriendContextType = {
    userInfo: FriendType[]
  }

  const { userInfo } = useContext(FriendContext) as FriendContextType

  const handleLike = async (id: string, favorite: boolean) => {
    const friendDocumentRef = doc(dbFireStore, 'post', id)

    await updateDoc(friendDocumentRef, {
      favorite: !favorite,
    })
  }

  return (
    <ul>
      {userInfo.map((friend: FriendType) => {
        return (
          <li key={friend.id} className="mt-4 first:mt-0 flex">
            <NavLink
              to={`edit/?id=${friend.id}`}
              className="mr-8 relative flex flex-1 items-center text-blue-primary"
            >
              <img
                className="rounded-xl h-12"
                src={`${process.env.PUBLIC_URL}${friend.image}`}
                alt=""
              />
              <div className="ml-4">
                <p className="text-lg">{friend.name}</p>
                <p className="text-base">カテゴリー:{friend.category}</p>
              </div>
            </NavLink>
            <button
              type="button"
              onClick={() => handleLike(friend.id, friend.favorite)}
            >
              <ReactIcon
                name="IoStar"
                size={25}
                className={
                  friend.favorite ? 'text-blue-secondary' : 'text-slate-300'
                }
              />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
