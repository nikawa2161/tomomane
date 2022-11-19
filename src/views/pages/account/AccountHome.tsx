import { FC, useState } from 'react'
import { LoginForm } from './LoginForm'
import { ProfileForm } from './ProfileForm'

export const AccountHome: FC = () => {
  const [isProfile, setIsProfile] = useState(true)

  const profileHandler = () => {
    setIsProfile(true)
  }
  const memoHandler = () => {
    setIsProfile(false)
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
      </div>
      {isProfile ? <ProfileForm /> : <LoginForm />}
    </>
  )
}
