import { BannerSkeleton, PostCardSkeleton } from '@/components'

const Loading = () => {
  return (
    <>
      <BannerSkeleton />
      <div className="grid mt-8 grid-cols-3 gap-5">
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </>
  )
}

export default Loading
