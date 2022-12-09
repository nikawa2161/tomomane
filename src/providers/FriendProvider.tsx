import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { FriendContextType, IFriend } from 'types/postFriend'
import { db } from '../firebase'

import { collection, getDocs } from 'firebase/firestore'

type ChildrenType = {
  children: ReactNode
}

export const FriendContext = createContext<FriendContextType | null>(null)

export const FriendProvider: FC<ChildrenType> = ({ children }) => {
  // 取得は一回のみで良いので、useEffectを使用
  useEffect(() => {
    const postData = collection(db, 'post')
    getDocs(postData).then((snapShot) => {
      /* @ts-ignore */
      setUserInfo(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [])
  const [userInfo, setUserInfo] = useState<IFriend[]>([])

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
