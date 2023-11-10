import { render, screen, waitFor } from '@testing-library/react'
import PostList from '..'
import {
  ERROR_MESSAGES,
  POSTS_MOCK,
  POST_MOCK,
  ROUTES,
  SUCCESS_MESSAGE,
} from '@/constants'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'
import { FavoriteStatus, IPost } from '@/types'
import { useQueryStore } from '@/stores'

const queryClient = new QueryClient()

const routerPushMock = jest.fn()
const useRouterMock = {
  push: routerPushMock,
}

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => useRouterMock,
}))

const mutateMock = jest.fn()

jest.mock('@/hooks', () => ({
  ...jest.requireActual('@/hooks'),
  useAuth: () => ({
    usePost: {
      mutate: mutateMock,
    },
  }),
}))

const setup = (posts: IPost[]) =>
  render(
    <QueryClientProvider client={queryClient}>
      <PostList posts={posts} />
    </QueryClientProvider>,
  )

describe('PostList component', () => {
  const mockClearQuery = jest.fn()
  beforeEach(() => {
    useQueryStore.setState({
      clearQuery: mockClearQuery,
    })
  })

  it('should render correctly', () => {
    const { container } = setup(POSTS_MOCK)
    expect(container).toMatchSnapshot()
  })

  it('should navigate to the single post and clear query page when click post card', () => {
    const { container } = setup([POST_MOCK])

    const postCard = container.querySelector('.post-card')

    if (postCard) {
      userEvent.click(postCard)
      expect(routerPushMock).toHaveBeenCalledWith(
        ROUTES.SINGLE_POST_PARAM + POST_MOCK.id,
      )
      expect(mockClearQuery).toBeCalled()
    }
  })

  it('handle click on heart icon in post card', async () => {
    const { container } = setup([POST_MOCK])

    const heartIcon = container.querySelector('.post-card')?.closest('svg')

    if (heartIcon) {
      await userEvent.click(heartIcon)
      expect(
        screen.getByText('Add this post to your favorites list?'),
      ).toBeInTheDocument()
    }
  })

  it('handle change favorite post successfully', async () => {
    const { container } = setup([POST_MOCK])

    const heartIcon = container.querySelector('.post-card')?.closest('svg')

    if (heartIcon) {
      await userEvent.click(heartIcon)
      const confirmBtn = screen.getByText('Confirm')
      await userEvent.click(confirmBtn)

      await waitFor(() => {
        expect(mutateMock).toHaveBeenCalledWith(
          {
            ...POST_MOCK,
            favorite:
              POST_MOCK?.favorite === FavoriteStatus.Favorite
                ? FavoriteStatus.NotFavorite
                : FavoriteStatus.Favorite,
          },
          expect.objectContaining({
            onSuccess: expect.any(Function),
            onError: expect.any(Function),
          }),
        )
        mutateMock.mock.calls[0][1].onSuccess()
        expect(
          screen.getByText(SUCCESS_MESSAGE.UPDATE_POST_SUCCESS),
        ).toBeInTheDocument()
      })
    }
  })

  it('handle change favorite post failed', async () => {
    const { container } = setup([POST_MOCK])

    const heartIcon = container.querySelector('.post-card')?.closest('svg')

    if (heartIcon) {
      await userEvent.click(heartIcon)
      const confirmBtn = screen.getByText('Confirm')
      await userEvent.click(confirmBtn)

      await waitFor(() => {
        expect(mutateMock).toHaveBeenCalledWith(
          {
            ...POST_MOCK,
            favorite:
              POST_MOCK?.favorite === FavoriteStatus.Favorite
                ? FavoriteStatus.NotFavorite
                : FavoriteStatus.Favorite,
          },
          expect.objectContaining({
            onSuccess: expect.any(Function),
            onError: expect.any(Function),
          }),
        )
        mutateMock.mock.calls[0][1].onError()
        expect(
          screen.getByText(ERROR_MESSAGES.UPDATE_POST_FAILED),
        ).toBeInTheDocument()
      })
    }
  })
})
