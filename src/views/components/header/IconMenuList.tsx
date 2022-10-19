import { FC } from "react"

export const IconMenuList:FC = () => {
  return (
    <>
      <div className="px-4 pb-4 pt-2 bg-blue-primary regal-blue">
        <ul className="flex justify-between">
          <li className="flex items-center flex-col">
            <img
              className="h-5"
              src={`${process.env.PUBLIC_URL}/images/icons/book1.png`}
              alt=""
            />
            <p className="mt-1 text-gray-400 text-sm">トモダチ</p>
          </li>
          <li className="flex items-center flex-col">
            <img
              className="h-5"
              src={`${process.env.PUBLIC_URL}/images/icons/men1.png`}
              alt=""
            />
            <p className="mt-1 text-gray-400 text-sm">友達追加</p>
          </li>
          <li className="flex items-center flex-col">
            <img
              className="h-5"
              src={`${process.env.PUBLIC_URL}/images/icons/star1.png`}
              alt=""
            />
            <p className="mt-1 text-gray-400 text-sm">お気に入り</p>
          </li>
          <li className="flex items-center flex-col">
            <img
              className="h-5"
              src={`${process.env.PUBLIC_URL}/images/icons/calendar1.png`}
              alt=""
            />
            <p className="mt-1 text-gray-400 text-sm">カレンダー</p>
          </li>
          <li className="flex items-center flex-col">
            <img
              className="h-5"
              src={`${process.env.PUBLIC_URL}/images/icons/human2.png`}
              alt=""
            />
            <p className="mt-1 text-gray-400 text-sm">アカウント</p>
          </li>
        </ul>
      </div>
    </>
  )
}

