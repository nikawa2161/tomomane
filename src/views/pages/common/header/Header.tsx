import { FC } from 'react'
import { Sidebar } from './Sidebar'
import { HeaderIcon } from './HeaderIcon'
import './hamburger.css'

export const Header: FC = () => {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <Sidebar />
        <div className="px-4 pt-4 pb-4 bg-blue-primary regal-blue flex justify-between">
          <div className="flex justify-start ">
            <img
              className="h-5"
              src={`${process.env.PUBLIC_URL}/images/header/logo1.png`}
              alt=""
            />
          </div>
        </div>

        <div className="px-4 pb-4 pt-2 bg-blue-primary regal-blue md:hidden">
          <ul className="flex justify-between">
            <HeaderIcon url="top" iconName="ImAddressBook" title="トモダチ" />
            <HeaderIcon url="post" iconName="ImUserPlus" title="友達追加" />
            <HeaderIcon url="like" iconName="IoStar" title="お気に入り" />
            <HeaderIcon url="calendar" iconName="ImCalendar" title="カレンダー" />
            <HeaderIcon
              url="account"
              iconName="BsPersonCircle"
              title="アカウント"
            />
          </ul>
        </div>
      </header>
    </>
  )
}
