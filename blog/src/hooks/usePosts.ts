'use client'

import { BASE_URL, END_POINTS, INIT_POSTS } from '@/constants'
import { IPost } from '@/types'
import { get } from '@/utils'
import { useQuery } from '@tanstack/react-query'

export const useFetchPosts = (limit: string, query = '') => {
  return useQuery<IPost[]>({
    queryKey: [`${BASE_URL}/${END_POINTS.POSTS}` + limit + query],
    queryFn: () =>
      get(
        `${BASE_URL}/${END_POINTS.POSTS}a?page=1&limit=${limit}&title=${query}`,
      ),
    initialData: INIT_POSTS,
  })
}
