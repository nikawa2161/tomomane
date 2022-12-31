import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { RouteAuthGuard } from './RouteAuthGuard' // ユーザー認証

import { AccountHome } from 'views/pages/account/AccountHome'
import { CalenderHome } from 'views/pages/calender/CalenderHome'
import { FriendPostHome } from 'views/pages/friendPost/FriendPostHome'
import { CategoryHome } from 'views/pages/home/CategoryHome'
import { FriendEdit } from 'views/pages/home/firend/FriendEdit'
import { FriendHome } from 'views/pages/home/FriendHome'
import { Home } from 'views/pages/home/Home'
import { LikeHome } from 'views/pages/home/LikeHome'
import { LikesHome } from 'views/pages/likes/LikesHome'
import { NotFound } from 'views/pages/NotFound'
import { AuthHome } from 'views/pages/authentication/AuthHome'
import { SignIn } from 'views/pages/authentication/children/SignIn'

export const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<AuthHome />} />
        <Route path="signIn" element={<SignIn />} />

        <Route
          path="top"
          element={<RouteAuthGuard component={<Home />} redirect="/" />}
        >
          <Route
            index
            element={<RouteAuthGuard component={<FriendHome />} redirect="/" />}
          />
          <Route
            path="category"
            element={
              <RouteAuthGuard component={<CategoryHome />} redirect="/" />
            }
          />
          <Route
            path="like"
            element={<RouteAuthGuard component={<LikeHome />} redirect="/" />}
          />
        </Route>
        <Route
          path="top/edit"
          element={<RouteAuthGuard component={<FriendEdit />} redirect="/" />}
        />
        <Route
          path={`post`}
          element={
            <RouteAuthGuard component={<FriendPostHome />} redirect="/" />
          }
        />
        <Route
          path={`like`}
          element={<RouteAuthGuard component={<LikesHome />} redirect="/" />}
        />
        <Route
          path={`calendar`}
          element={<RouteAuthGuard component={<CalenderHome />} redirect="/" />}
        />
        <Route
          path={`account`}
          element={<RouteAuthGuard component={<AccountHome />} redirect="/" />}
        />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </>
  )
}
