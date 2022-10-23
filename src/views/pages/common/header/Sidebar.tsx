import { FC } from 'react'

import { slide as Menu } from 'react-burger-menu'
import { IconContext } from 'react-icons'
import { FaUser } from 'react-icons/fa'

import { Link } from 'react-router-dom'

type Route = {
  path: string
  title: string
}

export const Sidebar: FC = () => {
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
            <IconContext.Provider
              value={{ className: 'text-sky-500 w-full h-full' }}
            >
              <FaUser />
            </IconContext.Provider>
          </figure>
          <p className="ml-5 text-lg font-extrabold">吉田 太郎</p>
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
        </nav>
      </div>
    </Menu>
  )
}
