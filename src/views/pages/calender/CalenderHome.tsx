import { FC } from 'react'
import { ReactIcon } from 'ReactIcon/icon'

export const CalenderHome: FC = () => {
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl">カレンダー</h2>
        <div className="h-96 flex items-center flex-col justify-center mt-5 pb-1 text-sm">
          <ReactIcon name="ImCalendar" size={110} className="text-slate-500" />
          <p className="mt-5 text-center">
            現在作成中、公開までお待ちください。
          </p>
        </div>
      </div>
    </>
  )
}

