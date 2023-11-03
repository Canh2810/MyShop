import { renderHook, waitFor } from '@testing-library/react'
import { useDebounce } from '..'

describe('useDebounce', () => {
  it('should return the initial value', () => {
    const { result } = renderHook(() => useDebounce('hello', 500))
    expect(result.current).toBe('hello')
  })

  it('should debounce the value', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'hello', delay: 500 } },
    )

    expect(result.current).toBe('hello')

    // Update the value before the delay has passed.
    rerender({ value: 'world', delay: 500 })

    // The debounced value should still be 'hello'.
    expect(result.current).toBe('hello')

    // Fast-forward time by 500ms.
    jest.advanceTimersByTime(500)

    // The debounced value should now be 'world'.
    waitFor(() => {
      expect(result.current).toBe('world')
    })
  })
})
