import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { GENDER } from "../../constants/loanForm";
import type {
  ILoanFormState,
  IStep1Data,
  IStep2Data,
  IStep3Data,
} from "../../types/loanForm/types.ts";
import { submitLoanThunk } from "./loanFormThunks.ts";

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
  isLoading: false,
  error: null,
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
    resetForm: ( state ) => {
      state.step1 = initialState.step1
      state.step2 = initialState.step2
      state.step3 = initialState.step3
      state.isLoading = false
      state.error = null
    },
  },
  extraReducers: ( builder ) => {
    builder
    .addCase(submitLoanThunk.pending, ( state ) => {
      state.isLoading = true
      state.error = null
    })
    .addCase(submitLoanThunk.fulfilled, ( state ) => {
      state.isLoading = false
    })
    .addCase(submitLoanThunk.rejected, ( state, action ) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export const {updateStep1, updateStep2, updateStep3, resetForm} = loanFormSlice.actions