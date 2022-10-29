import { FC } from "react"

export const Home:FC = () => {
  return (
    <>
      <div className="flex justify-between py-5 px-5 items-center border-solid border-b border-current">
        <p className="text-2xl">山田太郎</p>
        <img
          className="h-12"
          src={`${process.env.PUBLIC_URL}/images/sample/1.png`}
          alt=""
        />
      </div>
      <div className="my-2 mx-2 py-1 px-1 rounded-2xl bg-slate-100">
        <div className="px-4 flex items-center">
          <img
            className="h-3"
            src={`${process.env.PUBLIC_URL}/images/icons/search1.png`}
            alt=""
          />
          <p className="ml-1">検索</p>
          <input className="flex-1 ml-3 bg-transparent" type="text" />
        </div>
      </div>
      <div className="py-2 px-5 flex justify-between">
        <p className="py-1 border-solid border-b border-current">友達一覧</p>
        <p className="py-1">カテゴリー</p>
        <p className="py-1">お気に入り</p>
      </div>
      <div className="">
        <ul className="px-5">
          <li className="flex items-center mt-6">
            <img
              className="rounded-xl h-16"
              src={`${process.env.PUBLIC_URL}/images/sample/1.png`}
              alt=""
            />
            <div className="ml-4">
              <p className="text-2xl">鈴木花子</p>
              <p className="text-xl">カテゴリー:仕事</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}