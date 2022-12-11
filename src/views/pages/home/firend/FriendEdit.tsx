import { useEffect, useState } from 'react'
import { dbFireStore } from '../../../../firebase'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
import { InputLabel } from 'views/components/atoms/inputLabel/InputLabel'
import { MemoInput } from 'views/pages/friendPost/MemoInput'

import { useLocation, useNavigate } from 'react-router-dom'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export const FriendEdit = () => {
  const [isState, setIsState] = useState(false)
  const [isProfile, setIsProfile] = useState(true)
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

  const sampleLocation = useLocation().search
  // [?id=]の切り取り
  const friendId = sampleLocation.slice(4)
  const friendDocumentRef = doc(dbFireStore, 'post', friendId)

  useEffect(() => {
    getDoc(friendDocumentRef).then((documentSnapshot) => {
      // 友達情報の更新
      // @ts-ignore
      setIsPost({ ...documentSnapshot.data() })
      alert('ユーザーを取得しました。')
      setIsState(true)
    })
  }, [])

  const profileHandler = () => {
    setIsProfile(true)
  }
  const memoHandler = () => {
    setIsProfile(false)
  }

  const navigate = useNavigate()
  const onFriendUpdate = () => {
    setDoc(friendDocumentRef, isPost)

    alert('友達の変更を受け付けました。')
    navigate('/')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setIsPost({ ...isPost, [name]: value })
  }
  return (
    <>
      {isState ? (
        <>
          <h1> 更新完了 </h1>
          <div className="mt-16">
            <img
              className="h-32 mx-auto"
              src={`${process.env.PUBLIC_URL}${isPost.image}`}
              alt=""
            />
            <div className="mt-5 p-2 flex justify-between bg-slate-400 w-9/12 rounded-xl mx-auto text-blue-primary font-bold">
              <button
                onClick={profileHandler}
                className={`w-6/12  text-center rounded-xl ${
                  isProfile ? 'bg-gray-50' : ''
                }`}
              >
                プロフィール
              </button>
              <button
                onClick={memoHandler}
                className={`w-6/12  text-center rounded-xl ${
                  !isProfile ? 'bg-gray-50' : ''
                }`}
              >
                メモ
              </button>
            </div>
          </div>
          {isProfile ? (
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
                    value={isPost.name}
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
                    value={isPost.sex}
                  />
                  <InputLabel
                    label="誕生日"
                    value={isPost.birthday}
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
                    value={isPost.address}
                  />
                  <InputLabel
                    label="職業"
                    placeholder="エンジニア"
                    inputName="work"
                    onChange={(e) => {
                      handleInputChange(e)
                    }}
                    value={isPost.work}
                  />
                  <InputLabel
                    label="関係"
                    placeholder="同僚"
                    inputName="relationship"
                    onChange={(e) => {
                      handleInputChange(e)
                    }}
                    value={isPost.relationship}
                  />
                  <InputLabel
                    label="カテゴリー"
                    placeholder="エンジニア"
                    inputName="category"
                    onChange={(e) => {
                      handleInputChange(e)
                    }}
                    value={isPost.category}
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
                    value={isPost.phone}
                  />
                  <InputLabel
                    label="メアド"
                    placeholder="yamada@taro.com"
                    type="email"
                    inputName="email"
                    onChange={(e) => {
                      handleInputChange(e)
                    }}
                    value={isPost.email}
                  />
                  <InputLabel
                    label="Twitter"
                    placeholder="@yamataro"
                    inputName="twitter"
                    onChange={(e) => {
                      handleInputChange(e)
                    }}
                    value={isPost.twitter}
                  />
                  <InputLabel
                    label="FaceBook"
                    placeholder="@yamataro"
                    inputName="facebook"
                    onChange={(e) => {
                      handleInputChange(e)
                    }}
                    value={isPost.facebook}
                  />
                  <InputLabel
                    label="Instagram"
                    placeholder="@yamataro"
                    inputName="instagram"
                    onChange={(e) => {
                      handleInputChange(e)
                    }}
                    value={isPost.instagram}
                  />
                  <InputLabel
                    label="TikTok"
                    placeholder="@yamataro"
                    inputName="tiktok"
                    onChange={(e) => {
                      handleInputChange(e)
                    }}
                    value={isPost.tiktok}
                  />
                  <InputLabel
                    label="YouTube"
                    placeholder="トモマネチャンネル"
                  />
                </form>
              </div>
              <div className="mt-10 w-4/5 mx-auto">
                <PrimaryButton onClick={onFriendUpdate}>変更</PrimaryButton>
              </div>
            </>
          ) : (
            <MemoInput />
          )}
        </>
      ) : (
        <h1>更新中</h1>
      )}
    </>
  )
}
