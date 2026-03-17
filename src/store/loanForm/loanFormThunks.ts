import { createAsyncThunk } from '@reduxjs/toolkit'
import { submitLoanApplication } from "../../api/loanForm.ts";


export const submitLoanThunk = createAsyncThunk(
  'loanForm/submit',
  async ( {firstName, lastName}: {firstName: string; lastName: string} ) => {
    return await submitLoanApplication(firstName, lastName)
  }
)