import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { FriendContextType, IFriend } from 'types/postFriend'
import { dbFireStore } from '../firebase'

import { collection, getDocs } from 'firebase/firestore'

type ChildrenType = {
  children: ReactNode
}

export const FriendContext = createContext<FriendContextType | null>(null)

export const FriendProvider: FC<ChildrenType> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<IFriend[]>([])

  // 取得は一回のみで良いので、useEffectを使用
  useEffect(() => {
    const postData = collection(dbFireStore, 'post')
    getDocs(postData).then((snapShot) => {
      /* @ts-ignore */
      setUserInfo(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      alert("データの取得")
    })
  }, [])
  

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
