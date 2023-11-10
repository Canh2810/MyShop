import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from '..'

const useRouterMock = {
  push: jest.fn(),
}
const loginMock = jest.fn()

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => useRouterMock,
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => 'mocked-callback-url'),
  })),
}))

// Mocking services
jest.mock('@/services', () => ({
  ...jest.requireActual('@/services'),
  login: () => loginMock,
}))

describe('LoginForm Component', () => {
  const setup = () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />)

    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')
    const submitButton = getByText('Login')

    return {
      emailInput,
      passwordInput,
      submitButton,
    }
  }

  global.fetch = jest.fn()
  it('should render correctly', () => {
    const { container } = render(<LoginForm />)
    expect(container).toMatchSnapshot()
  })

  it('handles form submission with valid data', async () => {
    const { emailInput, passwordInput } = setup()

    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password')
    // await userEvent.click(submitButton)

    // waitFor(() => {
    //   expect(useRouterMock.push).toHaveBeenCalledWith(ROUTES.HOME)
    // })
  })

  it('should display an error message for an invalid email', async () => {
    const { emailInput, submitButton } = setup()

    await userEvent.type(emailInput, 'invalidemail')
    await userEvent.click(submitButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Invalid format of email, please check.'),
    )

    expect(errorMessage).toBeInTheDocument()
  })

  it('should display an error message for a missing email', async () => {
    const { passwordInput, submitButton } = setup()

    await userEvent.type(passwordInput, 'password@123')
    await userEvent.click(submitButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Email is required'),
    )

    expect(errorMessage).toBeInTheDocument()
  })

  it('should display an error message for a missing password', async () => {
    const { emailInput, submitButton } = setup()

    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.click(submitButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Password is required'),
    )

    expect(errorMessage).toBeInTheDocument()
  })

  it('should display an error message for a missing email and password', async () => {
    const { submitButton } = setup()
    await userEvent.click(submitButton)

    const emailErrorMessage = await waitFor(() =>
      screen.getByText('Email is required'),
    )

    const passwordErrorMessage = await waitFor(() =>
      screen.getByText('Password is required'),
    )

    expect(emailErrorMessage).toBeInTheDocument()
    expect(passwordErrorMessage).toBeInTheDocument()
  })
})
