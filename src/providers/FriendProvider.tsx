import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { FriendContextType, IFriend } from 'types/postFriend'
import { dbFireStore } from '../firebase'

import { collection, getDocs, onSnapshot } from 'firebase/firestore'

type ChildrenType = {
  children: ReactNode
}

export const FriendContext = createContext<FriendContextType | null>(null)

export const FriendProvider: FC<ChildrenType> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<IFriend[]>([])

  // 取得は一回のみで良いので、useEffectを使用
  const postCollectionRef = collection(dbFireStore, 'post')
  useEffect(() => {
    getDocs(postCollectionRef).then((snapShot) => {
      /* @ts-ignore */
      setUserInfo(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      alert('データの取得')
    })
    const unSub = onSnapshot(postCollectionRef, (querySnapshot) => {
      setUserInfo(
        // @ts-ignore
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      )
    })
    return unSub
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
