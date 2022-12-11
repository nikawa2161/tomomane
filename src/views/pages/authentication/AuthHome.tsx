import { FC } from 'react'
import { auth, provider } from '../../../firebase'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
import { Home } from '../home/Home'

import { signInWithPopup } from 'firebase/auth'
import { ReactIcon } from 'ReactIcon/icon'
import { useAuthState } from 'react-firebase-hooks/auth'

export const AuthHome: FC = () => {
  const sinInWithGoogle = () => {
    // firebaseでログイン
    signInWithPopup(auth, provider)
  }

  const [user] = useAuthState(auth)

  return (
    <>
      {user ? (
        <Home />
      ) : (
        <div className="px-5 mt-16 ">
          <div className="flex items-center flex-col justify-center pb-1 text-sm">
            <ReactIcon
              name="ImAddressBook"
              size={110}
              className="text-slate-500"
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
            <div className="mt-10 w-4/5 mx-auto">
              <PrimaryButton
                className="flex justify-between items-center px-5 text-xl bg-blue-google text-white"
                onClick={sinInWithGoogle}
              >
                <img
                  className="h-8"
                  src={`${process.env.PUBLIC_URL}/images/logo/btn_google_dark_normal_ios.svg`}
                  alt=""
                />
                <p className="flex-1">Googleでログイン</p>
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
