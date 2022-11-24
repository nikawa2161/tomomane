import { FC } from 'react'
import { auth, provider } from '../../../firebase'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'

import { signInWithPopup } from 'firebase/auth'

export const AuthHome: FC = () => {
  const sinInWithGoogle = () => {
    // firebaseでログイン
    signInWithPopup(auth, provider)
  }

  return (
    <>
      <div className="p-5 h-3/4">
        <div className="h-full flex items-center flex-col justify-center pb-1 text-sm">
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/book1.png`}
            alt="ソート"
            className="h-28"
          />
          <p className="mt-5 text-center">ログインが必要です。</p>
          <div className="mt-10 w-4/5 mx-auto">
            <PrimaryButton>ログイン</PrimaryButton>
          </div>
          <div className="mt-5 w-4/5 mx-auto">
            <PrimaryButton className="bg-white text-sky-400 border border-solid border-sky-400">
              新規登録
            </PrimaryButton>
          </div>
          <button
            type="button"
            className="flex justify-between items-center mt-10 py-2 px-5 text-xl w-4/5 mx-auto rounded-xl bg-blue-google text-white"
            onClick={sinInWithGoogle}
          >
            <img
              className="h-8"
              src={`${process.env.PUBLIC_URL}/images/logo/btn_google_dark_normal_ios.svg`}
              alt=""
            />
            <p className="flex-1">Googleでログイン</p>
          </button>
        </div>
      </div>
    </>
  )
}
