import { act, renderHook } from '@testing-library/react'
import { useQueryStore } from '..'

describe('useQueryStore', () => {
  const { result } = renderHook(() => useQueryStore())
  it('setQuery and clearQuery', () => {
    expect(result.current.query).toBe('')

    act(() => {
      result.current.setQuery('query')
    })

    expect(result.current.query).toBe('query')

    act(() => {
      result.current.clearQuery()
    })

    expect(result.current.query).toBe('')
  })
})
