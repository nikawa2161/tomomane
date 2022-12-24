import { FC } from 'react'
import { FriendProvider } from './FriendProvider'
import { UserAuthProvider } from './UserAuthProvider'

type Props = {
  children: React.ReactNode
}
export const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <UserAuthProvider>
        <FriendProvider>{children}</FriendProvider>
      </UserAuthProvider>
    </>
  )
}
