import { createAsyncThunk } from '@reduxjs/toolkit'
import { submitLoanApplication } from "../../api/loanForm.ts"

export const submitLoanThunk = createAsyncThunk(
  'loanForm/submit',
  async ( {firstName, lastName}: {firstName: string; lastName: string}, {rejectWithValue} ) => {
    try {
      return await submitLoanApplication(firstName, lastName)
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Ошибка при отправке заявки')
    }
  }
)