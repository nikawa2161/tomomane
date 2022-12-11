import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AccountHome } from 'views/pages/account/AccountHome'
import { AuthHome } from 'views/pages/authentication/AuthHome'
import { CalenderHome } from 'views/pages/calender/CalenderHome'
import { FriendPostHome } from 'views/pages/friendPost/FriendPostHome'
import { CategoryHome } from 'views/pages/home/CategoryHome'
import { FriendEdit } from 'views/pages/home/firend/FriendEdit'
import { FriendHome } from 'views/pages/home/FriendHome'
import { Home } from 'views/pages/home/Home'
import { LikeHome } from 'views/pages/home/LikeHome'
import { LikesHome } from 'views/pages/likes/LikesHome'
import { NotFound } from 'views/pages/NotFound'

export const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<AuthHome />} />
        <Route path="top" element={<Home />}>
          <Route path="friend" element={<FriendHome />} />
          <Route path="category" element={<CategoryHome />} />
          <Route path="like" element={<LikeHome />} />
        </Route>
        <Route path="top/edit" element={<FriendEdit />} />
        <Route path={`post`} element={<FriendPostHome />} />
        <Route path={`like`} element={<LikesHome />} />
        <Route path={`calendar`} element={<CalenderHome />} />
        <Route path={`account`} element={<AccountHome />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </>
  )
}
