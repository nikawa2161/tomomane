import { FC } from 'react'
import { BasicInput } from './BasicInput'
import { ContactInput } from './ContactInput'

export const FriendPostHome: FC = () => {
  return (
    <>
      <div className="mt-16">
        <img
          className="h-32 mx-auto"
          src={`${process.env.PUBLIC_URL}/images/sample/1.png`}
          alt=""
        />
        <div className="mt-5 p-2 flex justify-between bg-slate-400 w-9/12 rounded-xl mx-auto text-blue-primary font-bold">
          <p className="w-6/12  text-center bg-gray-50 rounded-lg">
            プロフィール
          </p>
          <p className="w-6/12 text-center rounded-xl">メモ</p>
        </div>
      </div>

      <BasicInput />
      <ContactInput />

      <button
        type="button"
        className="block mt-10 py-2 text-2xl w-4/5 mx-auto rounded-xl bg-sky-400 text-white"
      >
        追加
      </button>
    </>
  )
}
