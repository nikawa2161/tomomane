import { FC } from 'react'

type MyComponentsProps = {
  children: React.ReactNode
}

export const PrimaryButton: FC<MyComponentsProps> = ({children}) => {

  return (
    <>
      <button
        type="button"
        className="block py-2 w-full text-2xl rounded-xl bg-sky-400 text-white"
      >
        {children}
      </button>
    </>
  )
}