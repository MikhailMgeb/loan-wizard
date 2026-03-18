export const fetchCategories = (): Promise<string[]> =>
  fetch('https://dummyjson.com/products/category-list')
  .then(res => res.json())