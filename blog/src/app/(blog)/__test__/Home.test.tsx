import { render } from '@testing-library/react'
import Home from '../page'
import { POSTS_MOCK } from '@/constants'
import userEvent from '@testing-library/user-event'

const mockUseFetchPosts = jest.fn()

jest.mock('@/hooks', () => ({
  ...jest.requireActual('@/hooks'),
  useFetchPosts: () => mockUseFetchPosts,
}))

describe('Home page', () => {
  beforeEach(() => {
    mockUseFetchPosts.mockReturnValue({
      data: POSTS_MOCK,
    })
  })

  it('should render correctly', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })

  it('should toggle view all posts', async () => {
    const { getByText } = render(<Home />)
    const button = getByText('View all post')

    await userEvent.click(button)

    expect(button).toHaveTextContent('Hide less')
  })
})
