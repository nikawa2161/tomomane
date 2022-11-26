import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AccountHome } from 'views/pages/account/AccountHome'
import { CalenderHome } from 'views/pages/calender/CalenderHome'
import { FriendPostHome } from 'views/pages/friendPost/FriendPostHome'
import { Home } from 'views/pages/home/Home'
import { LikesHome } from 'views/pages/likes/LikesHome'
import { NotFound } from 'views/pages/NotFound'

export const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`post/`} element={<FriendPostHome />} />
        <Route path={`like/`} element={<LikesHome />} />
        <Route path={`calendar/`} element={<CalenderHome />} />
        <Route path={`account/`} element={<AccountHome />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </>
  )
}
