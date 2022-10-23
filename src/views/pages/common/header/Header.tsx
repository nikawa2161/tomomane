import { FC } from 'react'
import { Sidebar } from './Sidebar'
import { IconMenuList } from './IconMenuList'
import './hamburger.css'


export const Header:FC = () => {
  return (
    <>
      <Sidebar />
      <header className="">
        <div className="px-4 pt-4 pb-4 bg-blue-primary regal-blue flex justify-between">
          <div className="flex justify-start ">
            <img
              className="h-5"
              src={`${process.env.PUBLIC_URL}/images/header/logo1.png`}
              alt=""
            />
          </div>
        </div>

        <IconMenuList />
      </header>
    </>
  )
}
