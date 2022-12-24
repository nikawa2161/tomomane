import { FC } from 'react'
import { Header } from './pages/common/header/Header'
import { Footer } from './pages/common/Footer'
import { Router } from '../router/Router'

export const App: FC = () => {
  return (
    <>
      <div className="App">
        <div className="min-h-screen">
          <Header />
          <div className="pt-32 min-h-screen">
            <Router />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
