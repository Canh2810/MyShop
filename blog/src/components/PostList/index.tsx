'use client'

// Libs
import { Suspense, memo, useCallback, useState } from 'react'

// Components
import { ConfirmModal, PostCard, PostCardSkeleton, Toast } from '../index'

// Types
import { CommonStatus, FavoriteStatus, IPost } from '@/types'
import { ERROR_MESSAGES, ROUTES, SUCCESS_MESSAGE } from '@/constants'
import { usePost } from '@/hooks'
import { useRouter } from 'next/navigation'
import { useQueryStore } from '@/stores'

interface PostListProps {
  posts: IPost[]
  limitPosts: string
}

const PostList = ({ posts, limitPosts }: PostListProps) => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false)
  const [post, setPost] = useState<IPost | null>(null)
  const [toastStatus, setToastStatus] = useState<CommonStatus | null>(null)
  const router = useRouter()
  const clearQuery = useQueryStore((state) => state.clearQuery)
  const query = useQueryStore((state) => state.query)

  const {
    updatePost: { mutate, isPending: isLoadingUpdatePost },
  } = usePost(limitPosts, query)

  // Toggle confirm modal
  const handleToggleConfirmModal = useCallback(() => {
    setIsOpenConfirmModal((prev) => !prev)
  }, [])

  /**
   * Handle click post card
   * @param event mouse event
   * @param post post value
   */
  const handleClickPostCard = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, post: IPost) => {
      setToastStatus(null)
      if ((event.target as HTMLDivElement).closest('svg')) {
        // Show modal when click heart icon
        handleToggleConfirmModal()
        setPost(post)
      } else {
        // Navigate to single post page when click anywhere except the heart icon on the PostCard
        clearQuery()
        router.push(ROUTES.SINGLE_POST_PARAM + post.id)
      }
    },
    [clearQuery, handleToggleConfirmModal, router],
  )

  // Update favorite status for post
  const handleChangeFavoriteStatus = useCallback(() => {
    if (post) {
      const data: IPost = {
        ...post,
        favorite:
          post?.favorite === FavoriteStatus.Favorite
            ? FavoriteStatus.NotFavorite
            : FavoriteStatus.Favorite,
      }
      mutate(data, {
        onSuccess: () => {
          setToastStatus(CommonStatus.Success)
          handleToggleConfirmModal()
        },
        onError: () => {
          setToastStatus(CommonStatus.Failed)
          handleToggleConfirmModal()
        },
      })
    }
  }, [handleToggleConfirmModal, mutate, post])

  const handleCloseToast = useCallback(() => {
    setToastStatus(null)
  }, [])

  return (
    <>
      {toastStatus && (
        <Toast
          title={
            toastStatus === CommonStatus.Success
              ? SUCCESS_MESSAGE.UPDATE_POST_SUCCESS
              : ERROR_MESSAGES.UPDATE_POST_FAILED
          }
          status={toastStatus}
          onClose={handleCloseToast}
        />
      )}
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 gap-5">
          {posts?.map((post: IPost) => {
            const handleClick = (
              event: React.MouseEvent<HTMLDivElement, MouseEvent>,
            ) => handleClickPostCard(event, post)
            return (
              <Suspense key={post.id} fallback={<PostCardSkeleton />}>
                <PostCard
                  key={post.id}
                  post={post}
                  onCLickPostCard={handleClick}
                />
              </Suspense>
            )
          })}
        </div>
        {isOpenConfirmModal && (
          <ConfirmModal
            title={
              post?.favorite === FavoriteStatus.NotFavorite
                ? 'Add this post to your favorites list?'
                : 'Remove this post from your favorites list'
            }
            isLoading={isLoadingUpdatePost}
            onSubmit={handleChangeFavoriteStatus}
            onClose={handleToggleConfirmModal}
          />
        )}
      </div>
    </>
  )
}

export default memo(PostList)
