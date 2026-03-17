import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { EGender } from "../../types/loanForm/enum";
import type {
	ICategoryOption,
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
		gender: EGender.Male,
	},
	step2: {
		workplace: '',
		address: '',
	},
	step3: {
		amount: 200,
		term: 10,
	},
	categories: {
		categories: [],
		loading: false,
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
		setCategories: (state, action: PayloadAction<ICategoryOption[]>) => {
			state.categories.categories = action.payload
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.categories.loading = action.payload
		},
	},
})

export const {updateStep1, updateStep2, updateStep3, setCategories, setLoading} = loanFormSlice.actions