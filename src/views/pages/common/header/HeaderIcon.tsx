import { FC } from 'react'
import { IconsName } from 'types/icon'
import { ReactIcon } from 'ReactIcon/icon'

import { NavLink } from 'react-router-dom'

type RoutesItem = {
  url: string
  iconName: IconsName
  title: string
}

export const HeaderIcon: FC<RoutesItem> = ({ url, iconName, title }) => {
  return (
    <>
      <li className="flex items-center flex-col">
        <NavLink to={url}>
          {({ isActive }: { isActive: boolean }) => (
            <>
              <ReactIcon
                name={`${iconName}`}
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
                {title}
              </p>
            </>
          )}
        </NavLink>
      </li>
    </>
  )
}
