import { Dispatch, SetStateAction } from "react"

export interface IFriend {
  id: number
  name: string
  sex: number
  birthday: number
  address: string
  work: string
  relationship: string
  phone: number
  email: string
  twitter?: string
  facebook?: string
  instagram?: string
  tiktok?: string
  image?: string
  category?: string
  favorite?: boolean
}
export type FriendContextType = {
  userInfo: IFriend[]
  setUserInfo: Dispatch<SetStateAction<IFriend[]>>
}
