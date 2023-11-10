import { render } from '@testing-library/react'
import Home from '../page'
import { POSTS_MOCK } from '@/constants'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const mockUseFetchPosts = jest.fn()

jest.mock('@/hooks', () => ({
  ...jest.requireActual('@/hooks'),
  useFetchPosts: () => mockUseFetchPosts,
}))

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => jest.fn(),
}))

const setup = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>,
  )

describe('Home page', () => {
  beforeEach(() => {
    mockUseFetchPosts.mockReturnValue({
      data: POSTS_MOCK,
    })
  })

  it('should render correctly', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('should toggle view all posts', async () => {
    const { getByText } = setup()
    const button = getByText('View all post')

    await userEvent.click(button)

    expect(button).toHaveTextContent('Hide less')
  })
})
