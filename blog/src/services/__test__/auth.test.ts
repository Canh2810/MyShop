import '@testing-library/jest-dom'

import { ERROR_MESSAGES, USERS_MOCK } from '@/constants'
import { loginService } from '..'
import { Status } from '@/types'

const mockUsers = USERS_MOCK

describe('login function', () => {
  it('returns true for a valid user', () => {
    const validUser = mockUsers[0] // Assuming the first user in the mock data is valid
    const result = loginService({
      email: validUser.email,
      password: validUser.password,
    })
    expect(result.status).toBe(Status.Success)
    expect(result.data).toBe(validUser)
  })

  it('returns false for an invalid user', () => {
    const invalidUser = {
      email: 'invalid@example.com',
      password: 'wrongpassword',
    }
    const result = loginService(invalidUser)

    expect(result.status).toBe(Status.Failed)
    expect(result.message).toBe(ERROR_MESSAGES.LOGIN_INVALID)
  })
})
