import { FC } from 'react'
import { IconsName } from 'types/icon'
import { ReactIcon } from 'ReactIcon/icon'

import { NavLink } from 'react-router-dom'

type RoutesItem = {
  url: string
  iconName: IconsName
  title: string
}

export const SidebarIcon: FC<RoutesItem> = ({ url, iconName, title }) => {
  return (
    <>
      <li>
        <NavLink to={url} className="py-2 flex items-center">
          {({ isActive }: { isActive: boolean }) => (
            <>
              <ReactIcon
                name={`${iconName}`}
                size={30}
                className={isActive ? 'text-blue-secondary' : 'text-slate-400'}
              />
              <p
                className={
                  isActive
                    ? 'ml-2 text-blue-secondary text-base'
                    : 'ml-2 text-black text-base'
                }
              >
                {title}
              </p>
            </>
          )}
        </NavLink>
      </li>
    </>
  )
}
