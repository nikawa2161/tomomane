import { FC } from 'react'
import { friendData } from 'testData'

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
            className="relative flex items-center mt-6 text-blue-primary first:mt-0"
          >
            <img
              className="rounded-xl h-16"
              src={`${process.env.PUBLIC_URL}${friend.image}`}
              alt=""
            />
            <div className="ml-4">
              <p className="text-2xl">{friend.name}</p>
              <p className="text-xl">カテゴリー:{friend.category}</p>
            </div>
            <img
              className="h-10 absolute right-0"
              src={`${process.env.PUBLIC_URL}/images/icons/star${
                friend.favorite ? '2' : '1'
              }.png`}
              alt=""
            />
          </li>
        )
      })}
    </ul>
  )
}