import { FC } from 'react'
import { auth, provider } from '../../../firebase'

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
          <button
            type="button"
            className="block mt-10 py-2 text-2xl w-4/5 mx-auto rounded-xl bg-sky-400 text-white"
          >
            ログイン
          </button>
          <button
            type="button"
            className="block mt-5 py-2 text-2xl w-4/5 mx-auto rounded-xl bg-white text-sky-400 border border-solid border-sky-400"
          >
            新規登録
          </button>
          <button
            type="button"
            className="block mt-10 py-2 text-2xl w-4/5 mx-auto rounded-xl bg-sky-400 text-white"
            onClick={sinInWithGoogle}
          >
            Googleでログイン
          </button>
        </div>
      </div>
    </>
  )
}
