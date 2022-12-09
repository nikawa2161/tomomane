import { FC, useContext } from 'react'
import { ReactIcon } from 'ReactIcon/icon'
import { FriendContext } from 'providers/FriendProvider'

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

  const { userInfo } = useContext(FriendContext) as FriendContextType;

  return (
    <ul>
      {userInfo.map((friend: FriendType) => {
        return (
          <li
            key={friend.id}
            className="relative flex items-center mt-4 text-blue-primary first:mt-0"
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
            <ReactIcon
              name="IoStar"
              size={25}
              className={
                friend.favorite
                  ? 'absolute right-0 text-blue-secondary'
                  : 'absolute right-0 text-slate-300'
              }
            />
          </li>
        )
      })}
    </ul>
  )
}
