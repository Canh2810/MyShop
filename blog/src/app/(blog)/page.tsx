'use client'

import { Advertisement, Banner, PostList, Button } from '@/components'
import { POST_MOCK } from '@/constants'
import { useInfinitePosts } from '@/hooks'
import { ButtonVariants } from '@/types'

const Home = () => {
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    fetchPreviousPage,
    isFetchingPreviousPage,
  } = useInfinitePosts(3)

  return (
    <div className="flex flex-col gap-[80px]">
      <Banner post={POST_MOCK} />
      <Advertisement />
      <div className="flex flex-col items-center gap-8">
        <PostList posts={data} />
        <Button
          variant={ButtonVariants.Outlined}
          isLoading={isFetchingNextPage || isFetchingPreviousPage}
          onClick={() => fetchNextPage()}
        >
          View all
        </Button>
        <Button
          variant={ButtonVariants.Outlined}
          isLoading={isFetchingNextPage || isFetchingPreviousPage}
          onClick={() => fetchPreviousPage()}
        >
          Hide less
        </Button>
      </div>
      <Advertisement />
    </div>
  )
}

export default Home
