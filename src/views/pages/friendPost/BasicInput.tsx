import { FC, useState } from 'react'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
import { InputLabel } from '../../components/atoms/inputLabel/InputLabel'
import { dbFireStore } from '../../../firebaseConfig'

import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

export const BasicInput: FC = () => {
  const navigate = useNavigate()

  const uuid = uuidv4()
  const friendId = `friend?${uuid}`

  const onFriendPost = () => {
    const friendRef = doc(dbFireStore, 'post', friendId)

    setDoc(friendRef, isPost)

    alert('友達を追加しました。')
    navigate('/')
  }

  const [isPost, setIsPost] = useState({
    name: '',
    sex: 0,
    birthday: '',
    address: '',
    work: '',
    relationship: '',
    phone: '',
    email: '',
    twitter: '',
    facebook: '',
    instagram: '',
    tiktok: '',
    image: '/images/sample/1.png',
    category: '',
    favorite: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setIsPost({ ...isPost, [name]: value })
  }

  return (
    <>
      <div className="mt-10">
        <div className="px-4 py-2 text-xl bg-slate-400 text-blue-primary font-bold">
          <p>基本情報</p>
        </div>
        <div className="px-4 mt-8">
          <InputLabel
            label="名前"
            placeholder="山田 太郎"
            inputName="name"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel label="フリガナ" placeholder="ヤマダ タロウ" />
          <InputLabel label="ニックネーム" placeholder="ヤマちゃん" />
          <InputLabel
            label="性別"
            type="number"
            placeholder="男性"
            inputName="sex"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel
            label="誕生日"
            value="2000-01"
            inputName="birthday"
            type="month"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel label="出身地" placeholder="沖縄" />
          <InputLabel
            label="住所"
            placeholder="東京都"
            inputName="address"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel
            label="職業"
            placeholder="エンジニア"
            inputName="work"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel
            label="関係"
            placeholder="同僚"
            inputName="relationship"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel
            label="カテゴリー"
            placeholder="エンジニア"
            inputName="category"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="px-4 py-2 text-xl bg-slate-400 text-blue-primary font-bold">
          <p>連絡先</p>
        </div>
        <form className="px-4 mt-8" action="">
          <InputLabel
            label="電話番号"
            placeholder="080-1234-5678"
            type="tel"
            inputName="phone"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel
            label="メアド"
            placeholder="yamada@taro.com"
            type="email"
            inputName="email"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel
            label="Twitter"
            placeholder="@yamataro"
            inputName="twitter"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel
            label="FaceBook"
            placeholder="@yamataro"
            inputName="facebook"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel
            label="Instagram"
            placeholder="@yamataro"
            inputName="instagram"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel
            label="TikTok"
            placeholder="@yamataro"
            inputName="tiktok"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <InputLabel label="YouTube" placeholder="トモマネチャンネル" />
        </form>
      </div>
      <div className="mt-10 w-4/5 mx-auto">
        <PrimaryButton onClick={onFriendPost}>追加</PrimaryButton>
      </div>
    </>
  )
}
