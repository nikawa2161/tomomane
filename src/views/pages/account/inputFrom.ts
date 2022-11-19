type InputType = {
  id: number
  label: string
  inputType: string
  placeholder?: string
  value?: string
}

export const inputProfile: InputType[] = [
  {
    id: 1,
    label: '性別',
    inputType: 'text',
    placeholder: '男性',
  },
  {
    id: 2,
    label: '誕生日',
    inputType: 'month',
    value: '2000-01',
  },
  {
    id: 3,
    label: '住所',
    inputType: 'text',
    placeholder: '東京',
  },
  {
    id: 4,
    label: '職業',
    inputType: 'text',
    placeholder: 'エンジニア',
  },
  {
    id: 5,
    label: '電話番号',
    inputType: 'tel',
    placeholder: '090-1234-5678',
  },
  {
    id: 6,
    label: 'Twitter',
    inputType: 'text',
    placeholder: '@tomomane',
  },
  {
    id: 7,
    label: 'instagram',
    inputType: 'text',
    placeholder: '@tomomane',
  },
  {
    id: 8,
    label: 'TikTok',
    inputType: 'text',
    placeholder: '@tomomane',
  },
  {
    id: 9,
    label: 'YouTube',
    inputType: 'text',
    placeholder: 'トモマネチャンネル',
  },
]

export const inputLogin: InputType[] = [
  {
    id: 1,
    label: 'メールアドレス',
    inputType: 'email',
    placeholder: 'yama@yama.com',
  },
  {
    id: 2,
    label: '新パスワード',
    inputType: 'password',
    placeholder: 'pass',
  },
  {
    id: 3,
    label: '確認パスワード',
    inputType: 'password',
    placeholder: 'pass',
  },
]
