import { act, renderHook } from '@testing-library/react'
import { useAuthStore } from '..'

describe('useAuthStore', () => {
  it('should login and logout', () => {
    const { result } = renderHook(() => useAuthStore())

    expect(result.current.email).toBe(null)

    act(() => {
      result.current.login('test@example.com')
    })

    expect(result.current.email).toBe('test@example.com')

    act(() => {
      result.current.logout()
    })

    expect(result.current.email).toBe(null)
  })
})
