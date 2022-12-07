import { FC } from 'react'

type Input = {
  label: string
  placeholder?: string
  type?: string
  inputName?:string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputLabel: FC<Input> = ({
  label,
  placeholder,
  type = 'text',
  value,
  inputName,
  onChange,
}) => {
  return (
    <>
      <div className="flex mt-5">
        <label className="text-blue-primary font-bold w-32" htmlFor="">
          {label}
        </label>
        <input
          className="font-bold flex-1"
          type={type}
          placeholder={placeholder}
          value={value}
          name={inputName}
          /* @ts-ignore */
          onChange={e => onChange(e)}
        />
      </div>
    </>
  )
}
