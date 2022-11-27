import { FC } from 'react'
import { friendData } from 'testData'
import { ReactIcon } from 'ReactIcon/icon'

export const FriendHome: FC = () => {
  type FriendData = {
    id: number
    name: string
    image: string
    category: string
    favorite: boolean
  }

  return (
    <ul>
      {friendData.map((friend: FriendData) => {
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
