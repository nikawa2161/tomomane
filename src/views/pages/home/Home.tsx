import { FC, useState } from 'react'
import { ReactIcon } from 'ReactIcon/icon';
import { CategoryHome } from './CategoryHome';
import { FriendHome } from './FriendHome';
import { LikeHome } from './LikeHome';

import { Outlet } from 'react-router-dom';

export const Home: FC = () => {

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
          <ReactIcon name="ImSearch" size={15} />
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

      <div className="mt-5 px-5">
        {choice === 'friend' ? (
          <FriendHome />
        ) : choice === 'category' ? (
          <CategoryHome />
        ) : (
          <LikeHome />
        )}
      </div>
      <Outlet />
    </>
  )
}
