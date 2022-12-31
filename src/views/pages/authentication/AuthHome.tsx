import { FC, useContext } from 'react'
import { auth, provider } from '../../../firebaseConfig'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
import { UserAuthContext } from 'providers/UserAuthProvider'

import { ReactIcon } from 'ReactIcon/icon'
import { signInWithPopup } from 'firebase/auth'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

type CustomLocation = {
  state: string
}

export const AuthHome: FC = () => {
  const navigate = useNavigate()
  const location: CustomLocation = useLocation() as CustomLocation
  const fromPathName: string = location.state

  const sinInWithGoogle = () => {
    // firebaseでログイン
    signInWithPopup(auth, provider)
  }

  const { isAuth } = useContext(UserAuthContext)
  if (isAuth) {
    navigate(fromPathName)
  }

  return (
    <>
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
            <NavLink to="signIn">
              <PrimaryButton className="bg-white text-sky-400 border border-solid border-sky-400">
                新規登録
              </PrimaryButton>
            </NavLink>
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
    </>
  )
}
