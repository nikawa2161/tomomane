import { FC } from 'react'
import { InputLabel } from '../../components/atoms/inputLabel/InputLabel'

export const ContactInput: FC = () => {
  return (
    <>
      <div className="mt-10">
        <div className="px-4 py-2 text-xl bg-slate-400 text-blue-primary font-bold">
          <p>連絡先</p>
        </div>
        <form className="px-4 mt-8" action="">
          <InputLabel name="電話番号" placeholder="080-1234-5678" type="tel" />
          <InputLabel
            name="メアド"
            placeholder="yamada@taro.com"
            type="email"
          />
          <InputLabel name="Twitter" placeholder="@yamataro" />
          <InputLabel name="FaceBook" placeholder="@yamataro" />
          <InputLabel name="Instagram" placeholder="@yamataro" />
          <InputLabel name="TikTok" placeholder="@yamataro" />
          <InputLabel name="YouTube" placeholder="トモマネチャンネル" />
        </form>
      </div>
    </>
  )
}
