'use client'
import { redirect } from 'next/navigation'

// Components
import {
  Footer,
  Header,
  PostCardSkeleton,
  PostList,
  Typography,
} from '@/components'

// Constants
import { ROUTES } from '@/constants'

// Hooks
import { useDebounce, useFetchPosts } from '@/hooks'

// Stores
import { useAuthStore, useQueryStore } from '@/stores'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const query = useQueryStore((state) => state.query)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const debouncedValue = useDebounce<string>(query)
  const { data, isLoading } = useFetchPosts(
    '',
    debouncedValue,
    debouncedValue.length === 0,
  )

  if (!isAuthenticated) {
    redirect(ROUTES.LOGIN)
  }

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
