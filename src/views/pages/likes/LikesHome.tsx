import { FC, useState } from 'react'
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
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/filter1.png`}
              alt="ソート"
              className="h-4 absolute  -translate-y-2/4 top-1/2"
            />
            <button
              onClick={handleMenu}
              id=""
              className="w-auto pl-5 text-right"
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
              <li className="p-3 border-b border border-current">
                名前順
              </li>
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
