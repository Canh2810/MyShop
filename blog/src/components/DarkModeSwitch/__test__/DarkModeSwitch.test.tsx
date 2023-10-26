import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DarkModeSwitch from '..'

describe('DarkModeSwitch Component', () => {
  it('renders without errors', () => {
    const { container } = render(<DarkModeSwitch />)
    expect(container).toMatchSnapshot()
  })
  it('toggle theme on checkbox change', async () => {
    const { getByRole } = render(<DarkModeSwitch />)
    const checkbox = getByRole('checkbox')

    await userEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })
})
