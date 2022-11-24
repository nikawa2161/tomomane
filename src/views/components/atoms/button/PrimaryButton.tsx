import { FC } from 'react'

type MyComponentsProps = {
  children: React.ReactNode
  onClick?: VoidFunction
  className?: string
}

export const PrimaryButton: FC<MyComponentsProps> = (props) => {
  const { children, onClick, className  } = props
  return (
    <>
      <button
        type="button"
        className={`block py-2 w-full text-2xl rounded-xl ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
PrimaryButton.defaultProps = {
  className : 'bg-sky-400 text-white'
}