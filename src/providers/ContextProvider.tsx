import { FC } from "react"
import { FriendProvider } from "./FriendProvider"


type Props = {
  children: React.ReactNode
}
export const Providers: FC<Props> = (props) => {
  return (
    <>
      <FriendProvider>{props.children}</FriendProvider>
    </>
  )
}
