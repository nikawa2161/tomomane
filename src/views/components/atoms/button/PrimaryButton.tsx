import { FC } from 'react'

type MyComponentsProps = {
  children: React.ReactNode
  onClick?: VoidFunction
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const PrimaryButton: FC<MyComponentsProps> = (props) => {
  const { type = 'button', children, onClick, className } = props
  return (
    <>
      <button
        type={type}
        className={`block py-2 w-full text-2xl rounded-xl ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
PrimaryButton.defaultProps = {
  className: 'bg-blue-secondary text-white',
}
