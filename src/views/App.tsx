import { FC } from 'react'
import { Header } from './pages/common/header/Header'
import {Footer} from './pages/common/Footer'
import { AuthHome } from './pages/authentication/AuthHome'
import { Router } from '../router/Router'
import { auth } from '../firebase'

import { useAuthState } from 'react-firebase-hooks/auth'

export const App: FC = () => {
  // ログイン状態の確認
  const [user] = useAuthState(auth)

  return (
    <>
      <div className="App">
        <div className="min-h-screen">
          <Header />
          <div className="pt-32 min-h-screen">
            {user ? <Router /> : <AuthHome />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
