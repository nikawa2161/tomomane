import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { auth } from 'firebaseConfig'

import { useAuthState } from 'react-firebase-hooks/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

type Context = {
  isAuth: boolean
  signIn: (email: string, pass: string) => void
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

  // メール、パスワード認証
  const signIn = (email: string, pass: string) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        // サインイン
        setIsAuth(true)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const signOut = () => {
    auth.signOut()
    setIsAuth(false)
  }

  return (
    <UserAuthContext.Provider value={{ isAuth, signIn, signOut }}>
      {children}
    </UserAuthContext.Provider>
  )
}
