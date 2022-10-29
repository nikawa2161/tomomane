import { FC } from 'react'

export const ContactInput: FC = () => {
  return (
    <>
      <div className="mt-10">
        <div className="px-4 py-2 text-xl bg-slate-400 text-blue-primary font-bold">
          <p>連絡先</p>
        </div>
        <form className="px-4 mt-8" action="">
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              電話番号
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="080-1234-5678"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              メアド
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="yamada@taro.com"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              Twitter
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="@yamataro"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              FaceBook
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="@yamataro"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              Instagram
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="@yamataro"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              TikTok
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="@yamataro"
            />
          </div>
        </form>
      </div>
    </>
  )
}
