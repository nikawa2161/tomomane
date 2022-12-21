import { FC, useState } from 'react'
import { ReactIcon } from 'ReactIcon/icon'

export const FilterFunction: FC = () => {
  const [select, setSelect] = useState<string>('order')
  const [isDisplay, setIsDisplay] = useState<boolean>(false)

  const handleMenu = () => {
    setIsDisplay(!isDisplay)
  }
  // @ts-ignore
  const handleCheck = (e) => {
    setSelect(e.target.value)
  }

  const RADIO_COLLECTION = [
    { value: 'order', label: '並び替え', func: () => test() },
    { value: 'newOrder', label: '登録順', func: () => newSort() },
  ]

  const newSort = () => {
    alert("aaaa")
  }
  const test = () => {
    alert("aaaa")
  }

  return (
    <div className="">
      <ReactIcon
        name="BsArrowDownUp"
        size={20}
        className="text-black absolute -translate-1/2"
      />
      <button onClick={handleMenu} id="" className="w-auto pl-6 text-right">
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
  )
}
