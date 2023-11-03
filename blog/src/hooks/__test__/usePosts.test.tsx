import { waitFor, renderHook } from '@testing-library/react'

import * as utils from '@/utils'
import { POSTS_MOCK } from '@/constants'
import { useFetchPosts } from '..'
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
