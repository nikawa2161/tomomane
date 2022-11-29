import { FC } from 'react'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
import { InputLabel } from '../../components/atoms/inputLabel/InputLabel'

export const ProfileForm: FC = () => {
  return (
    <>
      <div className="px-5 pb-5 mt-8">
        <InputLabel name="性別" placeholder="男性" />
        <InputLabel name="誕生日" value="2000-01" type="month" />
        <InputLabel name="住所" placeholder="東京" />
        <InputLabel name="職業" placeholder="エンジニア" />
        <InputLabel name="電話番号" placeholder="090-1234-5678" type="tel" />
        <InputLabel name="Twitter" placeholder="@tomomane" />
        <InputLabel name="instagram" placeholder="@tomomane" />
        <InputLabel name="TikTok" placeholder="@tomomane" />
        <InputLabel name="YouTube" placeholder="トモマネチャンネル" />
        <div className="mt-10 w-4/5 mx-auto">
          <PrimaryButton>変更</PrimaryButton>
        </div>
      </div>
    </>
  )
}
