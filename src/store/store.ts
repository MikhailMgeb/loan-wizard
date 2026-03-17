import { configureStore } from '@reduxjs/toolkit'
import { loanFormSlice } from "./loanForm/loanFormSlice.ts";

export const store = configureStore({
  reducer: {
    loanForm: loanFormSlice.reducer,
  },
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch