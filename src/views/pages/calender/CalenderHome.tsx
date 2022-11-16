import { FC } from 'react'

export const CalenderHome: FC = () => {
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl">カレンダー</h2>
        <div className="h-96 flex items-center flex-col justify-center mt-5 pb-1 text-sm">
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/calendar1.png`}
            alt="ソート"
            className="h-28"
          />
          <p className="mt-5 text-center">現在作成中、公開までお待ちください。</p>
        </div>
      </div>
    </>
  )
}

