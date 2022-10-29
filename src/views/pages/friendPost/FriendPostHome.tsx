import { FC } from 'react'

export const FriendPostHome: FC = () => {
  return (
    <>
      <div className="mt-16">
        <img
          className="h-32 mx-auto"
          src={`${process.env.PUBLIC_URL}/images/sample/1.png`}
          alt=""
        />
        <div className="mt-5 p-2 flex justify-between bg-slate-400 w-9/12 rounded-xl mx-auto text-blue-primary font-bold">
          <p className="w-6/12  text-center bg-gray-50 rounded-lg">
            プロフィール
          </p>
          <p className="w-6/12 text-center rounded-xl">メモ</p>
        </div>
      </div>

      <div className="mt-10">
        <div className="px-4 py-2 text-xl bg-slate-400 text-blue-primary font-bold">
          <p>基本情報</p>
        </div>
        <form className="px-4 mt-8" action="">
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              名前
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="山田 太郎"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              フリガナ
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="ヤマダ タロウ"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              ニックネーム
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="ヤマちゃん"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              性別
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="男性"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              誕生日
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="1998年2月20日"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              出身地
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="沖縄"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              住所
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="神奈川県"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              職業
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="エンジニア"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              関係
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="同僚"
            />
          </div>
          <div className="flex mt-5">
            <label className="text-blue-primary font-bold w-28" htmlFor="">
              カテゴリー
            </label>
            <input
              className="font-bold flex-1"
              type="text"
              placeholder="エンジニア"
            />
          </div>
        </form>
      </div>

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

      <button
        type="button"
        className="block mt-10 py-2 text-2xl w-4/5 mx-auto rounded-xl bg-sky-400 text-white"
      >
        追加
      </button>
    </>
  )
}