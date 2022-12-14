import { FC } from 'react'
import { InputLabel } from 'views/components/atoms/inputLabel/InputLabel'

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: {
    name: string
    sex: number
    birthday: string
    address: string
    work: string
    relationship: string
    category: string
  }
}

export const BasicForm: FC<Props> = ({ onChange, value }) => {
  return (
    <div className="px-4 mt-8">
      <InputLabel
        label="名前"
        placeholder="山田 太郎"
        inputName="name"
        onChange={onChange}
        value={value.name}
      />
      <InputLabel label="フリガナ" placeholder="ヤマダ タロウ" />
      <InputLabel label="ニックネーム" placeholder="ヤマちゃん" />
      <InputLabel
        label="性別"
        type="number"
        placeholder="男性"
        inputName="sex"
        onChange={onChange}
        value={value.sex}
      />
      <InputLabel
        label="誕生日"
        value={value.birthday}
        inputName="birthday"
        type="month"
        onChange={onChange}
      />
      <InputLabel label="出身地" placeholder="沖縄" />
      <InputLabel
        label="住所"
        placeholder="東京都"
        inputName="address"
        onChange={onChange}
        value={value.address}
      />
      <InputLabel
        label="職業"
        placeholder="エンジニア"
        inputName="work"
        onChange={onChange}
        value={value.work}
      />
      <InputLabel
        label="関係"
        placeholder="同僚"
        inputName="relationship"
        onChange={onChange}
        value={value.relationship}
      />
      <InputLabel
        label="カテゴリー"
        placeholder="エンジニア"
        inputName="category"
        onChange={onChange}
        value={value.category}
      />
    </div>
  )
}
