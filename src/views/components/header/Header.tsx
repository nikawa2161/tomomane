import './hamburger.css'

import Sidebar from "./Sidebar"

function Header() {
  return (
    <>
      <Sidebar />
      <header className="">
        <div className="py-4 px-4 bg-blue-primary regal-blue">
          <div className="flex justify-start">
            <img
              className="h-5"
              src={`${process.env.PUBLIC_URL}/images/header/logo1.png`}
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header