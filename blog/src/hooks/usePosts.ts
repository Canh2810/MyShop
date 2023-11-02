'use client'

import { BASE_URL, END_POINTS } from '@/constants'
import { IPost } from '@/types'
import { get } from '@/utils'
import { useQuery } from '@tanstack/react-query'

export const useFetchPosts = (limit = '', query = '', isDisabled = false) => {
  return useQuery<IPost[]>({
    queryKey: [`${BASE_URL}/${END_POINTS.POSTS}` + limit + query],
    queryFn: () =>
      get(
        `${BASE_URL}/${END_POINTS.POSTS}?page=1&limit=${limit}&title=${query}`,
      ),
    enabled: !isDisabled,
  })
}
