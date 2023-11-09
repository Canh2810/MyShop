'use client'

// Components
import {
  Footer,
  Header,
  PostList,
  PostListSkeleton,
  Typography,
} from '@/components'

// Hooks
import { useDebounce, useFetchPosts } from '@/hooks'

// Stores
import { useQueryStore } from '@/stores'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const query = useQueryStore((state) => state.query)
  const debouncedValue = useDebounce<string>(query)
  const { data, isLoading } = useFetchPosts(
    '',
    debouncedValue,
    debouncedValue.length === 0,
  )

  /**
   * Render data
  @param children
  @returns search result when search or children
  */
  const renderBody = (children: React.ReactNode) => {
    if (debouncedValue.length > 0) {
      return (
        <>
          {data && data.length === 0 ? (
            <Typography className="text-center">No Result Found</Typography>
          ) : (
            <PostList posts={data || []} />
          )}
          {isLoading && <PostListSkeleton />}
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
