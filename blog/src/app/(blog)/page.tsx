import { Advertisement, Banner, PostList, Button } from '@/components'
import { POSTS_MOCK, POST_MOCK } from '@/constants'
import { ButtonVariants } from '@/types'

const Home = () => {
  return (
    <div className="flex flex-col gap-[80px]">
      <Banner post={POST_MOCK} />
      <Advertisement />
      <div className="flex flex-col items-center gap-8">
        <PostList posts={POSTS_MOCK} />
        <Button variant={ButtonVariants.Outlined}>View all post</Button>
      </div>
      <Advertisement />
    </div>
  )
}

export default Home
