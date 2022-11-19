import { FC } from 'react'
import { inputProfile } from './inputFrom'

export const ProfileForm: FC = () => {
  type inputType = {
    id: number
    label: string
    inputType: string
    placeholder?: string
    value?: string
  }

  return (
    <>
      <div className="px-5 pb-5 mt-8">
        {inputProfile.map((input: inputType) => (
          <div className="mt-5 flex justify-between" key={input.id}>
            <p className="font-bold w-28 text-blue-primary">{input.label}</p>
            <input
              className="flex-1"
              type={input.inputType}
              placeholder={input.placeholder}
              defaultValue={input.value}
            />
          </div>
        ))}

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
