type FriendData = {
  id: number
  name: string
  password: number
  sex: number
  birthday: number
  address: string
  work: string
  relationship: string
  phone: number
  email: string
  twitter: string
  facebook: string
  instagram: string
  tiktok: string
  image: string
  category: string
  favorite: boolean
}

type CategoryData = {
  id: number
  name: string
  image: string
}

export const friendData: FriendData[] = [
  {
    id: 1,
    name: '鈴木太郎',
    password: 1111,
    sex: 0,
    birthday: 19980220,
    address: '神奈川県',
    work: 'エンジニア',
    relationship: '友達',
    phone: 12012345678,
    email: 'test@test.com',
    twitter: '@12345',
    facebook: '345678',
    instagram: '@123456',
    tiktok: '@123456',
    image: '/images/sample/1.png',
    category: 'エンジニア',
    favorite: true,
  },
  {
    id: 2,
    name: '佐藤二郎',
    password: 1111,
    sex: 0,
    birthday: 19980220,
    address: '神奈川県',
    work: 'エンジニア',
    relationship: '友達',
    phone: 12012345678,
    email: 'test@test.com',
    twitter: '@12345',
    facebook: '345678',
    instagram: '@123456',
    tiktok: '@123456',
    image: '/images/sample/2.jpg',
    category: '同僚',
    favorite: false,
  },
  {
    id: 3,
    name: '田中花子',
    password: 1111,
    sex: 1,
    birthday: 19980220,
    address: '神奈川県',
    work: 'エンジニア',
    relationship: '友達',
    phone: 12012345678,
    email: 'test@test.com',
    twitter: '@12345',
    facebook: '345678',
    instagram: '@123456',
    tiktok: '@123456',
    image: '/images/sample/3.jpg',
    category: '友達',
    favorite: true,
  },
]

export const categoryData: CategoryData[] = [
  {
    id: 1,
    name: '無所属',
    image: '/images/sample/category1.jpg'
  },
  {
    id: 2,
    name: '友人',
    image: '/images/sample/category2.jpg'
  },
  {
    id: 3,
    name: 'エンジニア',
    image: '/images/sample/category3.jpg'
  },
  {
    id: 4,
    name: '仕事の同僚',
    image: '/images/sample/category4.jpg'
  },
]
