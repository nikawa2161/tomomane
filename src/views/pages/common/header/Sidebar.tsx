import { FC } from 'react'
import { auth } from '../../../../firebase'
import { PrimaryButton } from 'views/components/atoms/button/PrimaryButton'

import { slide as Menu } from 'react-burger-menu'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SidebarIcon } from './SidebarIcon'
import { ReactIcon } from 'ReactIcon/icon'

export const Sidebar: FC = () => {
  const [user] = useAuthState(auth)

  return (
    <Menu>
      <div>
        <div className="flex items-center flex-start">
          <figure className="w-14 h-14 rounded-full truncate shadow-lg shadow-gray-300">
            {auth.currentUser?.photoURL ? (
              <img src={auth.currentUser?.photoURL} alt="" />
            ) : (
              <ReactIcon
                name={`FaUser`}
                className="text-blue-secondary w-full h-full"
              />
            )}
          </figure>
          <p className="ml-5 text-base font-extrabold">
            {auth.currentUser?.displayName
              ? auth.currentUser?.displayName
              : 'ユーザー'}
          </p>
        </div>
        <nav className="mt-10">
          <ul>
            <SidebarIcon url="/" iconName="ImAddressBook" title="友達一覧" />
            <SidebarIcon url="post" iconName="ImUserPlus" title="友達追加" />
            <SidebarIcon url="like" iconName="IoStar" title="お気に入り" />
            <SidebarIcon
              url="calendar"
              iconName="ImCalendar"
              title="カレンダー"
            />
            <SidebarIcon
              url="account"
              iconName="BsPersonCircle"
              title="アカウント"
            />
          </ul>
          <div className="mt-10 w-4/5 mx-auto">
            {user ? (
              <PrimaryButton onClick={() => auth.signOut()}>
                ログアウト
              </PrimaryButton>
            ) : (
              <PrimaryButton>ログイン</PrimaryButton>
            )}
          </div>
        </nav>
      </div>
    </Menu>
  )
}
