import { FC } from "react"

export const MemoInput: FC = () => {
  return (
    <>
      <div className="mt-10">
        <div className="px-4 py-2 text-xl bg-slate-400 text-blue-primary font-bold">
          <p>メモの記入</p>
        </div>
        <div className="px-4 mt-8">
          <textarea
            className="block p-3 h-60 w-full bg-slate-100 rounded-xl"
            placeholder="テキストを入力してください"
            id=""
          ></textarea>
        </div>
      </div>
    </>
  )
}
