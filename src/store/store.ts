import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import { loanFormSlice } from "./loanForm/loanFormSlice.ts";

export const store = configureStore({
  reducer: {
    loanForm: loanFormSlice.reducer,
  },
})

export type TRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()