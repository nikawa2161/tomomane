import { FC } from 'react'
import { categoryData } from 'testData'

export const CategoryHome: FC = () => {
  type CategoryData = {
    id: number
    name: string
    image: string
  }
  return (
    <>
      <div className="mt-5 flex flex-wrap justify-between ">
        {/* カード */}
        {categoryData.map((category: CategoryData) => {
          return (
            <div
              className="w-40 mb-5 rounded-xl truncate shadow-md border border-solid border-blue-900"
              key={category.id}
            >
              <a href="/">
                <img
                  src={`${process.env.PUBLIC_URL}${category.image}`}
                  alt="カテゴリー画像"
                  className="h-40 object-cover w-full"
                />
                <p className="py-2 text-center text-sm">{category.name}</p>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}
