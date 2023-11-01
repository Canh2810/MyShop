export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const data: T = await response.json()
    return data
  } catch (error) {
    throw new Error('Fetch fail')
  }
}

export const post = async <T>(url: string, data: T) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(responseData.message)
  }

  return responseData
}
