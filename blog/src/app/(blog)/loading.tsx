import { BannerSkeleton, PostCardSkeleton } from '@/components'

const Loading = () => {
  return (
    <>
      <BannerSkeleton />
      <div className="grid grid-cols-3 gap-5">
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </>
  )
}

export default Loading
