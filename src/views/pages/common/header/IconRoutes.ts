import { IconsName } from 'types/icon'

type RoutesItem = {
  path: string
  iconName: IconsName
  title: string
}

export const IconRoutes: RoutesItem[] = [
  {
    path: '/',
    iconName: 'ImAddressBook',
    title: 'トモダチ',
  },
  {
    path: 'post',
    iconName: 'ImUserPlus',
    title: '友達追加',
  },
  {
    path: 'like',
    iconName: 'IoStar',
    title: 'お気に入り',
  },
  {
    path: 'calendar',
    iconName: 'ImCalendar',
    title: 'カレンダー',
  },
  {
    path: 'account',
    iconName: 'BsPersonCircle',
    title: 'アカウント',
  },
]
