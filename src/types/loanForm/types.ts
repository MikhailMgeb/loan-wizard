import type { GENDER } from "../../constants/loanForm";

export type TGender = typeof GENDER[keyof typeof GENDER]

export interface IStep1Data {
  phone: string
  firstName: string
  lastName: string
  gender: TGender
}

export interface IStep2Data {
  workplace: string
  address: string
}

export interface IStep3Data {
  amount: number
  term: number
}

export interface ICategoryOption {
  value: string
  label: string
}

export interface ICategoriesState {
  categories: ICategoryOption[]
  loading: boolean
}

export interface ILoanFormState {
  step1: IStep1Data
  step2: IStep2Data
  step3: IStep3Data
}