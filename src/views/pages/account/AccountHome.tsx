import { FC, useState } from 'react'
import { inputProfile } from './inputFrom'

export const AccountHome: FC = () => {
  const [isProfile, setIsProfile] = useState(true)

  const profileHandler = () => {
    setIsProfile(true)
  }
  const memoHandler = () => {
    setIsProfile(false)
  }

  type inputType = {
    id: number
    label: string
    placeholder: string
  }

  return (
    <>
      <div className="p-5 text-blue-primary">
        <h2 className="text-2xl">プロフィール</h2>
        <div className="relative mt-10 pb-1 text-sm ">
          <img
            src={`${process.env.PUBLIC_URL}/images/sample/1.png`}
            alt="プロフィール画像"
            className="h-28 mx-auto rounded-xl"
          />
          <p className="mt-4 text-center text-2xl">山田太郎</p>
        </div>
        {/* 以下、共通化対象 */}
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
            ログイン情報
          </button>
        </div>

        {/* プロフィールフォーム */}
        <div className="mt-8">
          {inputProfile.map((input: inputType) => (
            <div className="mt-5 flex justify-between" key={input.id}>
              <p className="font-bold w-28 text-blue-primary">{input.label}</p>
              <input
                className="flex-1"
                type="text"
                placeholder={input.placeholder}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="block mt-10 py-2 text-2xl w-4/5 mx-auto rounded-xl bg-sky-400 text-white"
        >
          変更
        </button>
      </div>
    </>
  )
}
