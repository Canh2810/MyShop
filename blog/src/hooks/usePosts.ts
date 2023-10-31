'use client'

import { BASE_URL, END_POINTS, INIT_POSTS } from '@/constants'
import { IPost } from '@/types'
import { get } from '@/utils'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfinitePosts = (limit: number) => {
  const { data, ...rest } = useInfiniteQuery<IPost[]>({
    queryKey: [`${BASE_URL}/${END_POINTS.POSTS}`],
    queryFn: ({ pageParam }) =>
      get(`${BASE_URL}${END_POINTS.POSTS}?page=${pageParam}&limit=${limit}`),
    initialPageParam: 1,
    getNextPageParam: (_, pages) => {
      return pages.length + 1
    },
    getPreviousPageParam: (_, pages) => {
      return pages.length - 1
    },
  })

  const posts: IPost[] =
    data?.pages.map((row) => row.map((item) => item)).flat() || INIT_POSTS

  return {
    data: posts,
    page: data?.pages.length,
    ...rest,
  }
}
