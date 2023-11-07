export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(`Request failed with status ${responseData.status}`)
  }

  return responseData
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
    throw new Error(`Request failed with status ${responseData.status}`)
  }

  return responseData
}

export const patch = async <T>(url: string, data: T): Promise<T> => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(`Request failed with status ${responseData.status}`)
  }

  return responseData
}
