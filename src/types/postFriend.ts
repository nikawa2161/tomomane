import { Dispatch, SetStateAction } from 'react'

export interface IFriend {
  id: string
  name: string
  sex: number
  birthday: number | null
  address: string | null
  work: string | null
  relationship: string | null
  phone: number | null
  email: string | null
  twitter?: string | null
  facebook?: string | null
  instagram?: string | null
  tiktok?: string | null
  image?: string | null
  category?: string | null
  favorite?: boolean
}
export type FriendContextType = {
  userInfo: IFriend[]
  setUserInfo: Dispatch<SetStateAction<IFriend[]>>
}
