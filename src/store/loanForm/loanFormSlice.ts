import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { GENDER } from "../../constants/loanForm";
import type {
  ILoanFormState,
  IStep1Data,
  IStep2Data,
  IStep3Data,
} from "../../types/loanForm/types.ts";

const initialState: ILoanFormState = {
  step1: {
    phone: '',
    firstName: '',
    lastName: '',
    gender: GENDER.Male,
  },
  step2: {
    workplace: '',
    address: '',
  },
  step3: {
    amount: 200,
    term: 10,
  },
}

export const loanFormSlice = createSlice({
  name: 'loanForm',
  initialState,
  reducers: {
    updateStep1: ( state, action: PayloadAction<IStep1Data> ) => {
      state.step1 = action.payload
    },
    updateStep2: ( state, action: PayloadAction<IStep2Data> ) => {
      state.step2 = action.payload
    },
    updateStep3: ( state, action: PayloadAction<IStep3Data> ) => {
      state.step3 = action.payload
    },
  },
})

export const {updateStep1, updateStep2, updateStep3} = loanFormSlice.actions