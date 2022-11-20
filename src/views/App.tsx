import { FC } from 'react'
import { AuthHome } from './pages/authentication/AuthHome'
import { Header } from './pages/common/header/Header'
// import { Router } from '../router/Router'

export const App: FC = () => {
  return (
    <>
      <div className="App h-screen">
        <Header />
        {/* <Router /> */}
        <AuthHome />
      </div>
    </>
  )
}
