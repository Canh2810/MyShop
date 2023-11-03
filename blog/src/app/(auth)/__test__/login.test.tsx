import { render } from '@testing-library/react'
import Login from '../login/page'

const useRouterMock = jest.fn()

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => useRouterMock,
}))

describe('Login page', () => {
  it('should render correctly', () => {
    const { container } = render(<Login />)
    expect(container).toMatchSnapshot()
  })
})
