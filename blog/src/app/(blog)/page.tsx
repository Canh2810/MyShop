import { Suspense } from 'react'

// Components
import {
  Advertisement,
  PostList,
  BannerSkeleton,
  Banner,
  PostListSkeleton,
} from '@/components'

import { POST_MOCK } from '@/constants'

const Home = () => {
  return (
    <div className="flex flex-col gap-[80px]">
      <Suspense fallback={<BannerSkeleton />}>
        <Banner post={POST_MOCK} />
      </Suspense>
      <Advertisement />
      <Suspense fallback={<PostListSkeleton />}>
        <PostList />
      </Suspense>
      <Advertisement />
    </div>
  )
}

export default Home
