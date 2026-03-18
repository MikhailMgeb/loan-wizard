import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from "../api/categories.ts";
import { setCategories, setLoading } from "../store/categories/categoriesSlice.ts";
import type { TRootState } from "../store/store.ts";

export function useCategories() {
  const dispatch = useDispatch()
  const {categories, loading} = useSelector(( state: TRootState ) => state.categories)

  useEffect(() => {
    if (categories.length > 0) return

    dispatch(setLoading(true))

    fetchCategories()
    .then(( data ) => {
      dispatch(setCategories(data.map(c => ({value: c, label: c}))))
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
  }, [categories.length, dispatch])

  return {categories, loading}
}