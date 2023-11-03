import { render, screen } from '@testing-library/react'

import Header from '..'
import { useQueryStore } from '@/stores'
import userEvent from '@testing-library/user-event'
import { ROUTES } from '@/constants'

const useRouterMock = {
  push: jest.fn(),
}

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => useRouterMock,
}))

const setup = () => render(<Header />)

describe('Header component', () => {
  const mockSetQuery = jest.fn()
  beforeEach(() => {
    useQueryStore.setState({
      query: '',
      setQuery: mockSetQuery,
    })
  })

  it('should render correctly', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('toggle logout dropdown', async () => {
    const { container } = setup()

    const dropdownIcon = container.querySelector('.ionicon')

    if (dropdownIcon) {
      await userEvent.click(dropdownIcon)
      const logout = screen.getByText('Logout')
      expect(logout).toBeVisible()
    }
  })

  it('handle logout', async () => {
    const { container } = setup()

    const dropdownIcon = container.querySelector('.ionicon')

    if (dropdownIcon) {
      await userEvent.click(dropdownIcon)
      const logout = screen.getByText('Logout')
      await userEvent.click(logout)
      expect(useRouterMock.push).toHaveBeenCalledWith(ROUTES.LOGIN)
    }
  })

  it('handles search input correctly', async () => {
    setup()
    const searchInput = screen.getByPlaceholderText('search')

    await userEvent.type(searchInput, 'Test search')
    expect(mockSetQuery).toBeCalledTimes(11)
  })
})
