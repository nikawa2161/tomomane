import { FC } from 'react'
import { LikeButton } from 'views/components/atoms/button/LikeButton'

import { NavLink } from 'react-router-dom'

type FriendType = {
  id: string
  name: string
  image: string
  category: string
  favorite: boolean
}
type FriendContextType = {
  friends: FriendType[]
}

export const LikeFriend: FC<FriendContextType> = ({ friends }) => {
  return (
    <>
      <ul>
        {friends.map(
          (friend: FriendType) =>
            friend.favorite === true && (
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
                <LikeButton id={friend.id} favorite={friend.favorite} />
              </li>
            ),
        )}
      </ul>
    </>
  )
}
