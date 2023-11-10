import { waitFor, renderHook, act } from '@testing-library/react'

import * as utils from '@/utils'
import { POSTS_MOCK, POST_MOCK } from '@/constants'
import { useFetchPosts, usePost } from '..'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('@/utils')

describe('useFetchPosts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should not fetch posts when disabled', async () => {
    const { result } = renderHook(() => useFetchPosts('', '', false), {
      wrapper,
    })

    await waitFor(() => {
      expect(result.current.data).toBeUndefined()
    })
  })
  it('fetch posts data successfully', async () => {
    jest.spyOn(utils, 'get').mockResolvedValue(POSTS_MOCK)

    const { result } = renderHook(() => useFetchPosts(''), { wrapper })

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(result.current.isSuccess).toBe(true)
    expect(result.current.data).toEqual(POSTS_MOCK)
  })
})

describe('usePost', () => {
  describe('updatePost', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('should successfully log in', async () => {
      const { result } = renderHook(() => usePost(), { wrapper })
      const data = POST_MOCK

      act(() => {
        result.current.updatePost.mutate(data)
      })

      await waitFor(() => {
        return result.current.updatePost.isSuccess
      })

      expect(result.current.updatePost.isSuccess).toBe(true)
    })

    it('should return an error from the server', async () => {
      const errorResponse = { error: 'Invalid credentials' }
      jest.spyOn(utils, 'patch').mockRejectedValue(errorResponse)
      const { result } = renderHook(() => usePost(), { wrapper })
      const data = POST_MOCK

      act(() => {
        result.current.updatePost.mutate(data)
      })

      await waitFor(() => {
        return result.current.updatePost.isError
      })

      expect(result.current.updatePost.isError).toBe(true)
    })
  })
})
