import { FC, useContext } from 'react'
import { UserAuthContext } from 'providers/UserAuthProvider'

import { Navigate } from 'react-router-dom'

type Props = {
  component: React.ReactNode
  redirect: string
}

export const RouteAuthGuard: FC<Props> = ({ component, redirect }) => {
  const { isAuth } = useContext(UserAuthContext)

  if (!isAuth) {
    return <Navigate to={redirect} replace={false} />
  }

  return <>{component}</>
}
