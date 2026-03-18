export const submitLoanApplication = async ( firstName: string, lastName: string ) => {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: `${firstName} ${lastName}`,
    }),
  })

  if (!response.ok) {
    throw new Error('Ошибка при отправке заявки')
  }

  return response.json()
}