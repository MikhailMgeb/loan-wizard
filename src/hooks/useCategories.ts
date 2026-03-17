import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories, setLoading } from "../store/loanForm/loanFormSlice.ts";
import type { TRootState } from "../store/store.ts";

// Хук кэширует результат в Redux — повторный вызов не делает новый запрос
export function useCategories() {
	const dispatch = useDispatch()
	const { categories, loading } = useSelector((state: TRootState) => state.loanForm.categories)

	useEffect(() => {
		if (categories.length > 0) return

		dispatch(setLoading(true))

		fetch('https://dummyjson.com/products/category-list')
		.then(res => res.json())
		.then((data: string[]) => {
			dispatch(setCategories(data.map(c => ({ value: c, label: c }))))
		})
		.finally(() => {
			dispatch(setLoading(false))
		})
	}, [categories.length, dispatch])

	return { categories, loading }
}