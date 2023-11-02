'use client'

import {
  Footer,
  Header,
  PostCardSkeleton,
  PostList,
  Typography,
} from '@/components'
import { useDebounce, useFetchPosts } from '@/hooks'
import { useQueryStore } from '@/stores'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const query = useQueryStore((state) => state.query)
  const debouncedValue = useDebounce<string>(query)
  const { data, isLoading } = useFetchPosts(
    '',
    debouncedValue,
    debouncedValue.length === 0,
  )

  const renderBody = (children: React.ReactNode) => {
    if (debouncedValue.length > 0) {
      return (
        <>
          {data && data.length > 0 ? (
            <PostList posts={data || []} />
          ) : (
            <Typography className="text-center">No Result Found</Typography>
          )}
          {isLoading && (
            <div className="grid mt-8 grid-cols-3 gap-5">
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </div>
          )}
        </>
      )
    }

    return children
  }

  return (
    <>
      <Header />
      <div className="container max-w-[1216px] mx-auto mt-[113px] mb-[100px]">
        {renderBody(children)}
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
