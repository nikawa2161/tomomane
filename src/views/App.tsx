import { FC } from 'react'
import { AuthHome } from './pages/authentication/AuthHome'
import { Header } from './pages/common/header/Header'
import { Router } from '../router/Router'

import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export const App: FC = () => {
  // ログイン状態の確認
  const [user] = useAuthState(auth)

  return (
    <>
      <div className="App h-screen">
        <Header />
        <div className="pt-32">{user ? <Router /> : <AuthHome />}</div>
      </div>
    </>
  )
}
