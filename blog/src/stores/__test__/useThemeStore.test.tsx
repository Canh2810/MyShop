import { act, renderHook } from '@testing-library/react'
import { useThemeStore } from '..'
import { THEMES } from '@/constants'

describe('useQueryStore', () => {
  const { result } = renderHook(() => useThemeStore())
  it('toggleTheme', () => {
    expect(result.current.theme).toBe(THEMES.LIGHT)

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe(THEMES.DARK)

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe(THEMES.LIGHT)
  })
})
