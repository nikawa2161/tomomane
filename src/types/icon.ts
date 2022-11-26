import { Icons } from 'icon/icon'

export type IconsName = keyof typeof Icons

export type Icon = {
  name: IconsName
  size?: number
  className?: string
}
