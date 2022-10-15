import { IconContext } from 'react-icons'
import { slide as Menu } from 'react-burger-menu'
import { FaUser } from 'react-icons/fa'

function Sidebar() {
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
            <li className="text-black">
              <button type="button" className="py-2">
                <p>友達一覧</p>
              </button>
            </li>
            <li className="text-black">
              <button type="button" className="py-2">
                <p>友達追加</p>
              </button>
            </li>
            <li className="text-black">
              <button type="button" className="py-2">
                <p>お気に入り</p>
              </button>
            </li>
            <li className="text-black">
              <button type="button" className="py-2">
                <p>アカウント</p>
              </button>
            </li>
            <li className="text-black">
              <button type="button" className="py-2">
                <p>カテゴリー設定</p>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Menu>
  )
}

export default Sidebar
