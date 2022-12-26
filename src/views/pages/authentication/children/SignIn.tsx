import { FC } from 'react'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'

export const SignIn: FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            新規会員登録
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              お名前・ニックネーム
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <PrimaryButton className="flex justify-between items-center px-5 text-xl bg-blue-google text-white">
            <p className="flex-1">新規登録</p>
          </PrimaryButton>
          <p className="text-xs text-gray-500 mt-3">ログインの方はこちら</p>
        </div>
      </div>
    </section>
  )
}
