import { render } from '@testing-library/react'
import PostList from '..'
import { POSTS_MOCK } from '@/constants'

const useRouterMock = jest.fn()

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => useRouterMock,
}))

describe('PostList component', () => {
  it('should render correctly', () => {
    const { container } = render(<PostList posts={POSTS_MOCK} />)
    expect(container).toMatchSnapshot()
  })
})
