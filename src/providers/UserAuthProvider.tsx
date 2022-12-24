import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { auth } from 'firebaseConfig'

import { useAuthState } from 'react-firebase-hooks/auth'

type Context = {
  isAuth: boolean
  signOut: () => void
}
type ChildrenType = {
  children: ReactNode
}

export const UserAuthContext = createContext<Context>({} as Context)

export const UserAuthProvider: FC<ChildrenType> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  const [user] = useAuthState(auth)
  useEffect(() => {
    if (user) {
      setIsAuth(true)
      alert('認証完了')
    }
  }, [user])

  const signOut = () => {
    auth.signOut()
  }

  return (
    <UserAuthContext.Provider value={{ isAuth, signOut }}>
      {children}
    </UserAuthContext.Provider>
  )
}
