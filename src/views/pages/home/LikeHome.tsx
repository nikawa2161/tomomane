import { FC, useContext } from 'react'
import { ReactIcon } from 'ReactIcon/icon'
import { FriendContext } from 'providers/FriendProvider'

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

export const LikeHome: FC = () => {
  const { userInfo } = useContext(FriendContext) as FriendContextType
  return (
    <>
      <ul>
        {userInfo.map(
          (friend: FriendType) =>
            friend.favorite === true && (
              <li
                key={friend.id}
                className="relative flex items-center mt-6 text-blue-primary first:mt-0"
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
                  className="absolute right-0 text-blue-secondary"
                />
              </li>
            ),
        )}
      </ul>
    </>
  )
}
