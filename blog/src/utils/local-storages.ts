/**
 * Set item to local storage
 * @param key
 * @param value
 */
export const setLocalStorageItem = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Get item to local storage
 * @param key
 * @return value corresponds to the key
 */
export const getLocalStorageItem = (key: string): unknown => {
  const value = localStorage.getItem(key)
  return value
}

/**
 * Remove item to local storage
 * @param key
 * @return value corresponds to the key
 */
export const removeLocalStorageItem = (key: string): void => {
  localStorage.removeItem(key)
}
