import { FC } from 'react'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
import { inputLogin } from './inputFrom'

export const LoginForm: FC = () => {
  type inputType = {
    id: number
    label: string
    inputType: string
    placeholder?: string
  }

  return (
    <>
      <div className="px-5 pb-5 mt-8">
        {inputLogin.map((input: inputType) => (
          <div className="mt-5 flex justify-between" key={input.id}>
            <p className="font-bold w-32 text-blue-primary">{input.label}</p>
            <input
              className="flex-1"
              type={input.inputType}
              placeholder={input.placeholder}
            />
          </div>
        ))}
        <p className="mt-5 text-center">
          ログイン時に使用します。
          <span className="inline-block">忘れないようにメモしてください</span>
        </p>

        <div className="mt-10 w-4/5 mx-auto">
          <PrimaryButton>変更</PrimaryButton>
        </div>
      </div>
      <div className="mt-20">
        <div className="px-4 py-2 text-xl bg-slate-400 text-blue-primary font-bold">
          <p>退会</p>
        </div>

        <div className="px-5 pb-5 mt-8">
          <p className="mt-5 text-center">
            この操作は取り消しできません。
            <br />
            新たにログインする場合は、
            <span className="inline-block">
              新しくアカウントを作成して下さい。
            </span>
          </p>
          <div className="mt-10 w-4/5 mx-auto">
            <PrimaryButton className="bg-gray-300 text-rose-500 font-bold">
              アカウント削除
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  )
}
