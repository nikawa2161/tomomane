import { FC } from 'react'

export const CategoryHome: FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between ">
        {/* カード */}
        <div className="w-5/12 rounded-xl truncate shadow-md border border-solid border-blue-900  ">
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/sample/category1.jpg`}
              alt="カテゴリー画像"
              className="h-36 object-cover w-full"
            />
            <p className="py-2 text-center text-sm">仕事の同僚</p>
          </a>
        </div>
      </div>
    </>
  )
}
