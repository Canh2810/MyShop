import { render, screen } from '@testing-library/react'

import Header from '..'
import { useQueryStore } from '@/stores'
import userEvent from '@testing-library/user-event'

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

  it('handles search input correctly', async () => {
    setup()
    const searchInput = screen.getByPlaceholderText('search')

    await userEvent.type(searchInput, 'Test search')
    expect(mockSetQuery).toBeCalled()
  })
})
