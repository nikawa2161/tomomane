import { FC } from 'react'
import { Header } from './pages/common/header/Header'
import { Router } from '../router/Router'

export const App: FC = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Router />
      </div>
    </>
  )
}
