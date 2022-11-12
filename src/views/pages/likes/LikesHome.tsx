import { FC } from 'react'
import { LikeHome } from '../home/LikeHome'

export const LikesHome: FC = () => {
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl">お気に入り</h2>
        <div className="mt-5 pb-1 flex justify-between border-b solid border-current text-sm">
          <p>○件</p>
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/filter1.png`}
              alt="ソート"
              className="h-4 absolute  -translate-y-2/4 top-1/2"
            />
            <button id="" className="w-auto pl-5 text-right">
              並び替え
            </button>
            <ul className="hidden">
              <li>新しいお気に入り順</li>
              <li>古いお気に入り順</li>
              <li>名前順</li>
            </ul>
          </div>
        </div>
        <div className='mt-5'>
          <LikeHome />
        </div>
      </div>
    </>
  )
}
