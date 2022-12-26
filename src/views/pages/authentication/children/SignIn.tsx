import { FC, useContext, useState } from 'react'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
import { UserAuthContext } from 'providers/UserAuthProvider'

import { useNavigate } from 'react-router-dom'

export const SignIn: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(UserAuthContext)
  const navigate = useNavigate()

  // @ts-ignore
  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value)
  }
  // @ts-ignore
  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value)
  }

  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault()
    signIn(email, password)
  }

  const { isAuth } = useContext(UserAuthContext)
  if (isAuth) {
    navigate('/top')
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            新規会員登録
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => handleChangeEmail(e)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="pass" className="leading-7 text-sm text-gray-600">
                パスワード
              </label>
              <input
                type="password"
                id="pass"
                name="email"
                onChange={(e) => handleChangePassword(e)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <PrimaryButton
              type="submit"
              className="flex justify-between items-center px-5 text-xl bg-blue-google text-white"
            >
              <p className="flex-1">新規登録</p>
            </PrimaryButton>
          </form>
          <p className="text-xs text-gray-500 mt-3">ログインの方はこちら</p>
        </div>
      </div>
    </section>
  )
}
