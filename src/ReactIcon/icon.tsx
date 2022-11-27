import { Icon } from 'types/icon'

import { ImUserPlus, ImCalendar, ImAddressBook } from 'react-icons/im'
import { IoStar } from 'react-icons/io5'
import { BsPersonCircle, BsArrowDownUp } from 'react-icons/bs'

// typesで使用
export const Icons = {
  ImAddressBook,
  ImUserPlus,
  IoStar,
  ImCalendar,
  BsPersonCircle,
  BsArrowDownUp,
}

export const ReactIcon = ({ name, size, className }: Icon) => {
  const ReactIcons = Icons[name]

  return <ReactIcons size={size} className={className} />
}
