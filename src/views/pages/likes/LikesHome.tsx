import { FC, useState } from 'react'
import { ReactIcon } from 'ReactIcon/icon';
import { LikeHome } from '../home/LikeHome'

export const LikesHome: FC = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleMenu = () => {
    setIsDisplay(!isDisplay)
  }
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl">お気に入り</h2>
        <div className="relative mt-5 pb-1 flex justify-between border-b solid border-current text-sm">
          <p>○件</p>
          <div className="">
            <ReactIcon
              name="BsArrowDownUp"
              size={20}
              className="text-black absolute -translate-1/2"
            />
            <button
              onClick={handleMenu}
              id=""
              className="w-auto pl-6 text-right"
            >
              並び替え
            </button>
            <ul
              className={`absolute right-0 z-10 translate-y-1 bg-gray-100 text-blue-primary border solid border-current ${
                isDisplay ? 'block' : 'hidden'
              }`}
            >
              <li className="p-3 border-b border border-current">
                新しいお気に入り順
              </li>
              <li className="p-3 border-b border border-current">
                古いお気に入り順
              </li>
              <li className="p-3 border-b border border-current">名前順</li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <LikeHome />
        </div>
      </div>
    </>
  )
}
