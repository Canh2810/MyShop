const PostCardSkeleton = () => (
  <div className="space-y-5 rounded-2xl bg-white/5 dark:bg-dark-100 p-4">
    <div className="h-[234px] rounded-lg bg-light-200 dark:bg-dark-200"></div>
    <div className="space-y-3">
      <div className="h-3 w-3/5 rounded-lg bg-light-200 dark:bg-dark-200"></div>
      <div className="h-3 w-4/5 rounded-lg bg-light-200 dark:bg-dark-200"></div>
      <div className="h-3 w-2/5 rounded-lg bg-light-200 dark:bg-dark-200"></div>
    </div>
  </div>
)

export default PostCardSkeleton
