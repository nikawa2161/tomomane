import { FriendContext } from 'providers/FriendProvider'
import { FC, useContext, useState } from 'react'
import { ReactIcon } from 'ReactIcon/icon'
import { LikeFriend } from './children/LikeFrind'

type FriendType = {
  id: string
  name: string
  image: string
  category: string
  favorite: boolean
}
type FriendContextType = {
  userInfo: FriendType[]
}

export const LikesHome: FC = () => {
  const { userInfo } = useContext(FriendContext) as FriendContextType

  const [isDisplay, setIsDisplay] = useState<boolean>(false)
  const [friends, setFriends] = useState([...userInfo])
  const [select, setSelect] = useState<string>('order')

  const handleMenu = () => {
    setIsDisplay(!isDisplay)
  }

  // @ts-ignore
  const handleCheck = (e) => {
    setSelect(e.target.value)
  }
  const RADIO_COLLECTION = [
    { value: 'order', label: '並び替え', func: () => test() },
    { value: 'nameOrder', label: '名前順', func: () => nameSort() },
    {
      value: 'inverseNameOrder',
      label: '逆名前順',
      func: () => inverseNameSort(),
    },
  ]
  const nameSort = () => {
    const newFriends = [...friends]

    newFriends.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
    })
    setFriends(newFriends)
  }
  const inverseNameSort = () => {
    const newFriends = [...friends]

    newFriends.sort((a, b) => {
      if (a.name < b.name) {
        return 1
      } else {
        return -1
      }
    })
    setFriends(newFriends)
  }
  const test = () => {
    setFriends(userInfo)
  }

  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl">お気に入り</h2>
        <div className="relative mt-5 pb-1 flex justify-between border-b solid border-current text-sm">
          <p>○件</p>
          {/* フィルター */}

          <div className="">
            <ReactIcon
              name="BsArrowDownUp"
              size={20}
              className="text-black absolute -translate-1/2"
            />
            <button
              onClick={handleMenu}
              id=""
              className="w-auto pl-6 text-right"
            >
              {select === 'order' ? '並び替え' : select}
            </button>

            <ul
              className={`absolute right-0 z-10 translate-y-1 bg-gray-100 text-blue-primary border solid border-current ${
                isDisplay ? 'block' : 'hidden'
              }`}
            >
              {RADIO_COLLECTION.map((radio) => {
                return (
                  <li className="border-b border border-current">
                    <label htmlFor={radio.value} className="block p-3">
                      <input
                        className="hidden"
                        type="radio"
                        id={radio.value}
                        value={radio.value}
                        checked={select === radio.value}
                        onChange={handleCheck}
                        onClick={radio.func}
                      />
                      {radio.label}
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* フィルター */}
        </div>
        <div className="mt-5">
          <LikeFriend friends={friends} />
        </div>
      </div>
    </>
  )
}
