import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
  ICategoriesState,
  ICategoryOption,
} from "../../types/loanForm/types.ts";

const initialState: ICategoriesState = {
  categories: [],
  loading: false,
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: ( state, action: PayloadAction<ICategoryOption[]> ) => {
      state.categories = action.payload
    },
    setLoading: ( state, action: PayloadAction<boolean> ) => {
      state.loading = action.payload
    },
  },
})

export const {setCategories, setLoading} = categoriesSlice.actions