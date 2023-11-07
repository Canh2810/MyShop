'use client'

import { BASE_URL, END_POINTS, QUERY_KEY } from '@/constants'
import { IPost } from '@/types'
import { get, patch } from '@/utils'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useFetchPosts = (limit = '', query = '', isDisabled = false) => {
  return useQuery<IPost[]>({
    queryKey: [QUERY_KEY.POSTS + limit + query],
    queryFn: () =>
      get(
        `${BASE_URL}${END_POINTS.POSTS}?page=1&limit=${limit}&title=${query}`,
      ),
    enabled: !isDisabled,
  })
}

export const usePost = (limit = '', query = '') => {
  const queryClient = useQueryClient()

  const updatePost = useMutation({
    mutationFn: (post: IPost) =>
      patch(`${BASE_URL}${END_POINTS.POSTS}/${post.id}`, post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POSTS + limit + query],
      })
    },
  })

  return {
    updatePost,
  }
}
