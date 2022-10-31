import { FC, useState } from 'react'
import { friendData } from 'testData'

export const Home: FC = () => {
  type FriendData = {
    id: number
    name: string
    image: string
    category: string
  }

  const [choice, setChoice] = useState("friend");

  const friendHandler = () => {
    setChoice('friend')
  }
  const categoryHandler = () => {
    setChoice('category')
  }
  const likeHandler = () => {
    setChoice('like')
  }

  return (
    <>
      <div className="flex justify-between py-5 px-5 items-center border-solid border-b border-current text-blue-primary">
        <p className="text-2xl">山田太郎</p>
        <img
          className="h-12"
          src={`${process.env.PUBLIC_URL}/images/sample/1.png`}
          alt=""
        />
      </div>
      <div className="my-2 mx-2 py-1 px-1 rounded-2xl bg-slate-100">
        <div className="px-4 flex items-center text-blue-primary">
          <img
            className="h-3"
            src={`${process.env.PUBLIC_URL}/images/icons/search1.png`}
            alt=""
          />
          <p className="ml-1">検索</p>
          <input className="flex-1 ml-3 bg-transparent" type="text" />
        </div>
      </div>
      <div className="py-2 px-5 flex justify-between text-blue-primary">
        <button
          onClick={friendHandler}
          className={`py-1 border-solid  border-current ${
            choice === 'friend' ? 'border-b' : ''
          }`}
        >
          友達一覧
        </button>
        <button
          onClick={categoryHandler}
          className={`py-1 border-solid  border-current ${
            choice === 'category' ? 'border-b' : ''
          }`}
        >
          カテゴリー
        </button>
        <button
          onClick={likeHandler}
          className={`py-1 border-solid  border-current ${
            choice === 'like' ? 'border-b' : ''
          }`}
        >
          お気に入り
        </button>
      </div>

      <div className="mt-5">
        <ul className="px-5">
          {friendData.map((friend: FriendData) => {
            return (
              <li
                key={friend.id}
                className="flex items-center mt-6 text-blue-primary first:mt-0"
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
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
