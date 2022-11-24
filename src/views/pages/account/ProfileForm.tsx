import { FC } from 'react'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
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
        <div className="mt-10 w-4/5 mx-auto">
          <PrimaryButton>変更</PrimaryButton>
        </div>
      </div>
    </>
  )
}
