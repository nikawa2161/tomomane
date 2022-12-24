import { FC, useContext } from 'react'
import { Header } from './pages/common/header/Header'
import { Footer } from './pages/common/Footer'
import { Router } from '../router/Router'
import { AuthHome } from './pages/authentication/AuthHome'
import { UserAuthContext } from 'providers/UserAuthProvider'

export const App: FC = () => {
  const { isAuth } = useContext(UserAuthContext)

  return (
    <>
      <div className="App">
        <div className="min-h-screen">
          <Header />
          <div className="pt-32 min-h-screen">
            {isAuth ? <Router /> : <AuthHome />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
