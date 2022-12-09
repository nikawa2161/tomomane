import { FC, useState } from 'react'
import { BasicInput } from './BasicInput'
import { MemoInput } from './MemoInput'

export const FriendPostHome: FC = () => {
  const [isProfile, setIsProfile] = useState(true)

  const profileHandler = () => {
    setIsProfile(true)
  }
  const memoHandler = () => {
    setIsProfile(false)
  }

  return (
    <>
      <div className="mt-16">
        <img
          className="h-32 mx-auto"
          src={`${process.env.PUBLIC_URL}/images/sample/1.png`}
          alt=""
        />
        <div className="mt-5 p-2 flex justify-between bg-slate-400 w-9/12 rounded-xl mx-auto text-blue-primary font-bold">
          <button
            onClick={profileHandler}
            className={`w-6/12  text-center rounded-xl ${
              isProfile ? 'bg-gray-50' : ''
            }`}
          >
            プロフィール
          </button>
          <button
            onClick={memoHandler}
            className={`w-6/12  text-center rounded-xl ${
              !isProfile ? 'bg-gray-50' : ''
            }`}
          >
            メモ
          </button>
        </div>
      </div>
      {isProfile ? (
        <>
          <BasicInput />
        </>
      ) : (
        <MemoInput />
      )}
    </>
  )
}
