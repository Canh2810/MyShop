'use client'
import { Suspense, useCallback, useState } from 'react'

// Components
import {
  Advertisement,
  PostList,
  Button,
  BannerSkeleton,
  Banner,
  PostListSkeleton,
} from '@/components'

import { LIMIT_POSTS, POST_MOCK } from '@/constants'
import { useFetchPosts } from '@/hooks'
import { ButtonVariants } from '@/types'
import { withAuth } from '@/hocs/auth'

const Home = () => {
  const [limitPosts, setLimitPosts] = useState(LIMIT_POSTS)

  const { data, isLoading } = useFetchPosts(limitPosts)

  const buttonTitle = limitPosts === LIMIT_POSTS ? 'View all post' : 'Hide less'

  const handleToggleViewALlPosts = useCallback(() => {
    setLimitPosts((prev) => (prev === LIMIT_POSTS ? '' : LIMIT_POSTS))
  }, [setLimitPosts])

  return (
    <div className="flex flex-col gap-[80px]">
      <Suspense fallback={<BannerSkeleton />}>
        <Banner post={POST_MOCK} />
      </Suspense>
      <Advertisement />
      <div className="flex flex-col items-center gap-8">
        <Suspense fallback={<PostListSkeleton />}>
          <PostList posts={data || []} limitPosts={limitPosts} />
        </Suspense>

        <Button
          variant={ButtonVariants.Outlined}
          onClick={handleToggleViewALlPosts}
        >
          {buttonTitle}
        </Button>
      </div>
      {isLoading && <PostListSkeleton />}
      <Advertisement />
    </div>
  )
}

export default withAuth(Home)
