import { FC } from 'react'
import { ReactIcon } from 'ReactIcon/icon'
import { dbFireStore } from '../../../../firebaseConfig'

import { doc, updateDoc } from 'firebase/firestore'

type MyComponentsProps = {
  id: string
  favorite: boolean
}

export const LikeButton: FC<MyComponentsProps> = ({ id, favorite }) => {
  const handleLike = async (id: string, favorite: boolean) => {
    const friendDocumentRef = doc(dbFireStore, 'post', id)

    await updateDoc(friendDocumentRef, {
      favorite: !favorite,
    })
  }
  return (
    <>
      <button type="button" onClick={() => handleLike(id, favorite)}>
        <ReactIcon
          name="IoStar"
          size={25}
          className={favorite ? 'text-blue-secondary' : 'text-slate-300'}
        />
      </button>
    </>
  )
}
