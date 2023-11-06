'use client'

import { BASE_URL, END_POINTS } from '@/constants'
import { IPost } from '@/types'
import { get, patch } from '@/utils'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useFetchPosts = (limit = '', query = '', isDisabled = false) => {
  const queryClient = useQueryClient()
  queryClient.invalidateQueries({
    queryKey: [`${BASE_URL}/${END_POINTS.POSTS}` + limit + query],
  })

  return useQuery<IPost[]>({
    queryKey: [`${BASE_URL}/${END_POINTS.POSTS}` + limit + query],
    queryFn: () =>
      get(
        `${BASE_URL}${END_POINTS.POSTS}?page=1&limit=${limit}&title=${query}`,
      ),
    enabled: !isDisabled,
  })
}

export const usePost = () => {
  const updatePost = useMutation({
    mutationFn: (post: IPost) =>
      patch(`${BASE_URL}${END_POINTS.POSTS}/${post.id}`, post),
  })

  return {
    updatePost,
  }
}
