import { FC } from 'react'

type Input = {
  name: string
  placeholder?: string
  type?: string
  value?: string
}

export const InputLabel: FC<Input> = ({
  name,
  placeholder,
  type = 'text',
  value,
}) => {
  return (
    <>
      <div className="flex mt-5">
        <label className="text-blue-primary font-bold w-32" htmlFor="">
          {name}
        </label>
        <input
          className="font-bold flex-1"
          type={type}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </>
  )
}
