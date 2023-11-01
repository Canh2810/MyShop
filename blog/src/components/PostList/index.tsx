// Libs
import { Suspense, memo } from 'react'

// Components
import { PostCard, PostCardSkeleton } from '../index'

// Types
import { IPost } from '@/types'

export interface PostListProps {
  posts: IPost[]
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {posts.map((post: IPost) => {
        return (
          <Suspense key={post.id} fallback={<PostCardSkeleton />}>
            <PostCard key={post.id} post={post} />
          </Suspense>
        )
      })}
    </div>
  )
}

export default memo(PostList)
