import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Menu from '..'
import { MenuVariants } from '@/types'
import { LIST_MENU_ITEM_MOCK } from '@/constants'

describe('Menu component', () => {
  it('should render correctly with variant is horizontal', () => {
    const { container } = render(<Menu listItems={LIST_MENU_ITEM_MOCK} />)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with variant is vertical', () => {
    const { container } = render(
      <Menu listItems={LIST_MENU_ITEM_MOCK} variant={MenuVariants.Vertical} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('calls the correct onClick handler when a menu item is clicked', () => {
    render(<Menu listItems={LIST_MENU_ITEM_MOCK} />)

    const menuItem = screen.getByText(LIST_MENU_ITEM_MOCK[0].title)

    userEvent.click(menuItem)
    expect(window.location.pathname).toBe(LIST_MENU_ITEM_MOCK[0].href)
  })
})
