import { FC, useContext } from 'react'
import { UserAuthContext } from 'providers/UserAuthProvider'

import { Navigate, useLocation } from 'react-router-dom'

type Props = {
  component: React.ReactNode
  redirect: string
}

export const RouteAuthGuard: FC<Props> = ({ component, redirect }) => {
  const { isAuth } = useContext(UserAuthContext)

  const nowLocation = useLocation()

  if (!isAuth) {
    return <Navigate to={redirect} state={ nowLocation.pathname } />
  }

  return <>{component}</>
}
