import { FC } from 'react'

export const BasicInput: FC = () => {
  return (
    <>
      <div className="mt-10">
        <div className="px-4 py-2 text-xl bg-slate-400 text-blue-primary font-bold">
          <p>基本情報</p>
        </div>
        <div className="px-4 mt-8">
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
        </div>
      </div>
    </>
  )
}
