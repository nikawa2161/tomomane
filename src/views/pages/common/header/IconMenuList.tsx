import { FC } from 'react'
import { IconsName } from 'types/icon'
import { ReactIcon } from 'ReactIcon/icon'
import { IconRoutes } from './IconRoutes'

import { NavLink } from 'react-router-dom'

export const IconMenuList: FC = () => {
  type RoutesItem = {
    path: string
    iconName: IconsName
    title: string
  }

  return (
    <>
      <div className="px-4 pb-4 pt-2 bg-blue-primary regal-blue md:hidden">
        <ul className="flex justify-between">
          {IconRoutes.map((route: RoutesItem) => {
            return (
              <li key={route.path} className="flex items-center flex-col">
                <NavLink to={route.path}>
                  {({ isActive }: { isActive: boolean }) => (
                    <>
                      <ReactIcon
                        name={`${route.iconName}`}
                        size={30}
                        className={
                          isActive
                            ? 'h-5 mx-auto my-0 text-blue-secondary'
                            : 'h-5 mx-auto my-0 text-slate-400'
                        }
                      />
                      <p
                        className={
                          isActive
                            ? 'mt-1 text-blue-secondary text-xs'
                            : 'mt-1 text-slate-400 text-xs'
                        }
                      >
                        {route.title}
                      </p>
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
