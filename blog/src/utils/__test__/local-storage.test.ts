import {
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
} from '..'

describe('localStorageUtils', () => {
  beforeEach(() => {
    // Mock the localStorage
    const localStorageMock = (function () {
      let store: { [key: string]: string } = {}

      return {
        getItem: function (key: string) {
          return store[key] || null
        },
        setItem: function (key: string, value: string) {
          store[key] = value.toString()
        },
        removeItem: function (key: string) {
          delete store[key]
        },
        clear: function () {
          store = {}
        },
      }
    })()
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    })
  })

  it('should set item in local storage', () => {
    setLocalStorageItem('testKey', 'testValue')
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('testValue'))
  })

  it('should get item from local storage', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'))
    expect(getLocalStorageItem('testKey')).toBe(JSON.stringify('testValue'))
  })

  it('should remove item from local storage', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'))
    removeLocalStorageItem('testKey')
    expect(localStorage.getItem('testKey')).toBeNull()
  })
})
