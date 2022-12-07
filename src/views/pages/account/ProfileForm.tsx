import { FC } from 'react'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
import { InputLabel } from '../../components/atoms/inputLabel/InputLabel'

export const ProfileForm: FC = () => {
  return (
    <>
      <div className="px-5 pb-5 mt-8">
        <InputLabel label="性別" placeholder="男性" />
        <InputLabel label="誕生日" value="2000-01" type="month" />
        <InputLabel label="住所" placeholder="東京" />
        <InputLabel label="職業" placeholder="エンジニア" />
        <InputLabel label="電話番号" placeholder="090-1234-5678" type="tel" />
        <InputLabel label="Twitter" placeholder="@tomomane" />
        <InputLabel label="instagram" placeholder="@tomomane" />
        <InputLabel label="TikTok" placeholder="@tomomane" />
        <InputLabel label="YouTube" placeholder="トモマネチャンネル" />
        <div className="mt-10 w-4/5 mx-auto">
          <PrimaryButton>変更</PrimaryButton>
        </div>
      </div>
    </>
  )
}
