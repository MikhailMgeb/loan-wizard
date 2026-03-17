export const GENDER = {
  Male: 'male',
  Female: 'female',
} as const;

export const FIELDS = {
  phone: 'phone',
  firstName: 'firstName',
  lastName: 'lastName',
  gender: 'gender',
  workplace: 'workplace',
  address: 'address',
  amount: 'amount',
  term: 'term',
} as const

export const VALIDATION = {
  required: 'Обязательное поле',
  phoneFormat: 'Формат: +7 (XXX) XXX-XX-XX',
} as const

export const LABELS = {
  phone: 'Телефон',
  firstName: 'Имя',
  lastName: 'Фамилия',
  gender: 'Пол',
  workplace: 'Место работы',
  address: 'Адрес проживания',
  amount: 'Сумма займа',
  term: 'Срок займа',
} as const

export const BUTTONS = {
  next: 'Далее →',
  back: '← Назад',
  submit: 'Подать заявку',
  close: 'Закрыть',
} as const

export const GENDER_OPTIONS = [
  {value: GENDER.Male, label: 'Мужской'},
  {value: GENDER.Female, label: 'Женский'},
]

export const STEPS = {
  step1: 'Шаг 1: Личные данные',
  step2: 'Шаг 2: Адрес и место работы',
  step3: 'Шаг 3: Параметры займа',
} as const

export const MODAL = {
  title: 'Заявка одобрена!',
  congratulations: ( lastName: string, firstName: string, amount: number, term: number ) =>
    `Поздравляем, ${lastName} ${firstName}. Вам одобрена $${amount} на ${term} дней.`,
} as const