// Libs
import { memo } from 'react'

// Components
import { PostCard } from '../index'

// Types
import { IPost } from '@/types'

export interface PostListProps {
  posts: IPost[]
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {posts.map((post: IPost) => {
        return <PostCard key={post.id} post={post} />
      })}
    </div>
  )
}

export default memo(PostList)
