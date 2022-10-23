import { FC } from 'react'
import { IconRoutes } from './IconRoutes'

import { Link } from 'react-router-dom'

export const IconMenuList: FC = () => {
  type RoutesItem = {
    path: string
    imageUrl: string
    title: string
  }

  return (
    <>
      <div className="px-4 pb-4 pt-2 bg-blue-primary regal-blue md:hidden">
        <ul className="flex justify-between">
          {IconRoutes.map((route: RoutesItem) => {
            return (
              <li key={route.path} className="flex items-center flex-col">
                <Link to={route.path}>
                  <img
                    className="h-5 mx-auto my-0"
                    src={`${process.env.PUBLIC_URL}${route.imageUrl}`}
                    alt=""
                  />
                  <p className="mt-1 text-gray-400 text-sm">{route.title}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
