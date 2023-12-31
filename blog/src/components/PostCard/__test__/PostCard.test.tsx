import { render } from '@testing-library/react'
import PostCard from '..'
import { POST_MOCK, ROUTES } from '@/constants'
import userEvent from '@testing-library/user-event'
import { useQueryStore } from '@/stores'

const useRouterMock = jest.fn()

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => useRouterMock,
}))

describe('PostCard component', () => {
  const mockClearQuery = jest.fn()
  beforeEach(() => {
    useQueryStore.setState({
      clearQuery: mockClearQuery,
    })
  })
  it('should render correctly', () => {
    const { container } = render(<PostCard post={POST_MOCK} />)
    expect(container).toMatchSnapshot()
  })

  it('should navigate to the single post and clear query page when click post card', () => {
    const routerPushMock = jest.fn()
    useRouterMock.mockReturnValue({ push: routerPushMock })

    const { container } = render(<PostCard post={POST_MOCK} />)
    const postCard = container.querySelector('.post-card')

    if (postCard) {
      userEvent.click(postCard)
      expect(routerPushMock).toHaveBeenCalledWith(
        ROUTES.SINGLE_POST_PARAM + POST_MOCK.id,
      )
      expect(mockClearQuery).toBeCalled()
    }
  })
})
