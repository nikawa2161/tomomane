import { createContext, FC, ReactNode, useState } from 'react'
import { FriendContextType, IFriend } from 'types/postFriend'

type ChildrenType = {
  children: ReactNode
}

export const FriendContext = createContext<FriendContextType | null>(null)

export const FriendProvider: FC<ChildrenType> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<IFriend[]>([
    {
      id: 1,
      name: '鈴木太郎',
      sex: 0,
      birthday: 19980220,
      address: '神奈川県',
      work: 'エンジニア',
      relationship: '友達',
      phone: 12012345678,
      email: 'test@test.com',
      twitter: '@12345',
      facebook: '345678',
      instagram: '@123456',
      tiktok: '@123456',
      image: '/images/sample/1.png',
      category: 'エンジニア',
      favorite: true,
    },
    {
      id: 2,
      name: '佐藤二郎',
      sex: 0,
      birthday: 19980220,
      address: '神奈川県',
      work: 'エンジニア',
      relationship: '友達',
      phone: 12012345678,
      email: 'test@test.com',
      twitter: '@12345',
      facebook: '345678',
      instagram: '@123456',
      tiktok: '@123456',
      image: '/images/sample/2.jpg',
      category: '同僚',
      favorite: false,
    },
    {
      id: 3,
      name: '田中花子',
      sex: 1,
      birthday: 19980220,
      address: '神奈川県',
      work: 'エンジニア',
      relationship: '友達',
      phone: 12012345678,
      email: 'test@test.com',
      twitter: '@12345',
      facebook: '345678',
      instagram: '@123456',
      tiktok: '@123456',
      image: '/images/sample/3.jpg',
      category: '友達',
      favorite: true,
    },
  ])

  return (
    <FriendContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </FriendContext.Provider>
  )
}
