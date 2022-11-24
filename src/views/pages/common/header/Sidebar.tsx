import { FC } from 'react'
import { auth } from '../../../../firebase'

import { slide as Menu } from 'react-burger-menu'
import { IconContext } from 'react-icons'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'

type Route = {
  path: string
  title: string
}

export const Sidebar: FC = () => {
  const [user] = useAuthState(auth)

  const routes: Route[] = [
    {
      path: '/',
      title: '友達一覧',
    },
    {
      path: '/post/',
      title: '友達追加',
    },
    {
      path: '/like/',
      title: 'お気に入り',
    },
    {
      path: '/calendar/',
      title: 'カレンダー',
    },
    {
      path: '/account/',
      title: 'アカウント',
    },
  ]
  return (
    <Menu>
      <div>
        <div className="flex items-center flex-start">
          <figure className="w-14 h-14 rounded-full truncate shadow-lg shadow-gray-300">
            {auth.currentUser?.photoURL ? (
              <img src={auth.currentUser?.photoURL} alt="" />
            ) : (
              <IconContext.Provider
                value={{ className: 'text-sky-500 w-full h-full' }}
              >
                <FaUser />
              </IconContext.Provider>
            )}
          </figure>
          <p className="ml-5 text-lg font-extrabold">
            {auth.currentUser?.displayName
              ? auth.currentUser?.displayName
              : 'ユーザー'}
          </p>
        </div>
        <nav className="mt-10">
          <ul>
            {routes.map((route: Route) => {
              return (
                <li className="text-black" key={route.path}>
                  <Link to={route.path} className="py-2 block">
                    <p>{route.title}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-10 w-4/5 mx-auto">
            {user ? (
              <PrimaryButton onClick={() => auth.signOut()}>
                ログアウト
              </PrimaryButton>
            ) : (
              <PrimaryButton>ログイン</PrimaryButton>
            )}
          </div>
        </nav>
      </div>
    </Menu>
  )
}
