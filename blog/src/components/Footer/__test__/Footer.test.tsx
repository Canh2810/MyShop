import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Footer from '..'

const setup = () => render(<Footer />)

describe('Footer component', () => {
  it('should render correctly', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('should display an error message for an invalid email', async () => {
    setup()

    const emailInput = screen.getByPlaceholderText('Your Email')
    const subscribeButton = screen.getByText('Subscribe')

    await userEvent.type(emailInput, 'invalid email')
    await userEvent.click(subscribeButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Invalid format of email, please check.'),
    )

    expect(errorMessage).toBeInTheDocument()
  })

  it('should display an error message for an empty email', async () => {
    setup()

    const subscribeButton = screen.getByText('Subscribe')

    await userEvent.click(subscribeButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Email is required'),
    )

    expect(errorMessage).toBeInTheDocument()
  })
})
