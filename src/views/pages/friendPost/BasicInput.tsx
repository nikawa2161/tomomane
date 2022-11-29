import { FC } from 'react'
import { InputLabel } from '../../components/atoms/inputLabel/InputLabel'

export const BasicInput: FC = () => {
  return (
    <>
      <div className="mt-10">
        <div className="px-4 py-2 text-xl bg-slate-400 text-blue-primary font-bold">
          <p>基本情報</p>
        </div>
        <div className="px-4 mt-8">
          <InputLabel name="名前" placeholder="山田 太郎" />
          <InputLabel name="フリガナ" placeholder="ヤマダ タロウ" />
          <InputLabel name="ニックネーム" placeholder="ヤマちゃん" />
          <InputLabel name="性別" placeholder="男性" />
          <InputLabel name="誕生日" value="2000-01" type="month" />
          <InputLabel name="出身地" placeholder="沖縄" />
          <InputLabel name="住所" placeholder="東京都" />
          <InputLabel name="職業" placeholder="エンジニア" />
          <InputLabel name="関係" placeholder="同僚" />
          <InputLabel name="カテゴリー" placeholder="エンジニア" />
        </div>
      </div>
    </>
  )
}
