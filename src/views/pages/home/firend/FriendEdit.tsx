import { useEffect, useState } from 'react'
import { dbFireStore } from '../../../../firebase'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'
import { InputLabel } from 'views/components/atoms/inputLabel/InputLabel'
import { MemoInput } from 'views/pages/friendPost/MemoInput'

import { useLocation, useNavigate } from 'react-router-dom'
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore'
import { BasicForm } from './BasicForm'

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

  const queryLocation = useLocation().search
  // [?id=]の切り取り
  const friendId = queryLocation.slice(4)
  const friendDocumentRef = doc(dbFireStore, 'post', friendId)

  useEffect(() => {
    getDoc(friendDocumentRef).then((documentSnapshot) => {
      // 友達情報の更新
      // @ts-ignore
      setIsPost({ ...documentSnapshot.data() })
      setIsState(true)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const onFriendDelete = async () => {
    await deleteDoc(friendDocumentRef)
    alert('友達の削除')
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
                <BasicForm
                  onChange={(e) => {
                    handleInputChange(e)
                  }}
                  value={{...isPost}}
                />
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
              <div className="mt-12 w-4/5 mx-auto">
                <PrimaryButton
                  onClick={onFriendDelete}
                  className="bg-red-600 text-white"
                >
                  削 除
                </PrimaryButton>
              </div>
            </>
          ) : (
            <MemoInput />
          )}
        </>
      ) : (
        // スピナー
        <div className="h-screen flex justify-center items-center">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      )}
    </>
  )
}
