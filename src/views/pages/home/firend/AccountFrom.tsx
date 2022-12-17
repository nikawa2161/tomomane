import { FC } from 'react'
import { InputLabel } from 'views/components/atoms/inputLabel/InputLabel'

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: {
    phone: string
    email: string
    twitter: string
    facebook: string
    instagram: string
    tiktok: string
  }
}

export const AccountForm: FC<Props> = ({ onChange, value }) => {
  return (
    <div className="px-4 mt-8">
      <InputLabel
        label="電話番号"
        placeholder="080-1234-5678"
        type="tel"
        inputName="phone"
        onChange={onChange}
        value={value.phone}
      />
      <InputLabel
        label="メアド"
        placeholder="yamada@taro.com"
        type="email"
        inputName="email"
        value={value.email}
        onChange={onChange}
      />
      <InputLabel
        label="Twitter"
        placeholder="@yamataro"
        inputName="twitter"
        value={value.twitter}
      />
      <InputLabel
        onChange={onChange}
        label="FaceBook"
        placeholder="@yamataro"
        inputName="facebook"
        value={value.facebook}
      />
      <InputLabel
        label="Instagram"
        placeholder="@yamataro"
        onChange={onChange}
        inputName="instagram"
        value={value.instagram}
      />
      <InputLabel
        label="TikTok"
        placeholder="@yamataro"
        inputName="tiktok"
        onChange={onChange}
        value={value.tiktok}
      />
      <InputLabel label="YouTube" placeholder="トモマネチャンネル" />
    </div>
  )
}
