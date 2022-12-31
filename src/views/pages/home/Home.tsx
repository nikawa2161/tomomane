import { FC } from 'react'
import { ReactIcon } from 'ReactIcon/icon'

import { Outlet } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

type Friend = {
  path: string
  navName: string
}

export const Home: FC = () => {
  const navMenus = [
    {
      path: '',
      navName: '友達',
    },
    {
      path: 'category',
      navName: 'カテゴリー',
    },
    {
      path: 'like',
      navName: 'お気に入り',
    },
  ]
  return (
    <>
      <div className="flex justify-between py-5 px-5 items-center border-solid border-b border-current text-blue-primary">
        <p className="text-2xl">山田太郎</p>
        <img
          className="h-12"
          src={`${process.env.PUBLIC_URL}/images/sample/1.png`}
          alt=""
        />
      </div>
      <div className="my-2 mx-2 py-1 px-1 rounded-2xl bg-slate-100">
        <div className="px-4 flex items-center text-blue-primary">
          <ReactIcon name="ImSearch" size={15} />
          <p className="ml-1">検索</p>
          <input className="flex-1 ml-3 bg-transparent" type="text" />
        </div>
      </div>
      <div className="py-2 px-5">
        <div className="flex justify-between text-blue-primary">
          {navMenus.map((nav: Friend) => (
            <NavLink
              key={nav.path}
              to={nav.path}
              className={({ isActive }) =>
                isActive
                  ? 'py-1 border-solid  border-current border-b'
                  : 'py-1 border-solid  border-current'
              }
            >
              {nav.navName}
            </NavLink>
          ))}
        </div>
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </>
  )
}
