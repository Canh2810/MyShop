import '@testing-library/jest-dom'

import { USERS_MOCK } from '@/constants'
import { loginService } from '..'

const mockUsers = USERS_MOCK

describe('login service', () => {
  it('returns true for a valid user', () => {
    const validUser = mockUsers[0] // Assuming the first user in the mock data is valid
    const result = loginService({
      email: validUser.email,
      password: validUser.password,
    })
    expect(result).toBe(mockUsers[0])
  })

  it('returns false for an invalid user', () => {
    const invalidUser = {
      email: 'invalid@example.com',
      password: 'wrongpassword',
    }
    const result = loginService(invalidUser)

    expect(result).toBe(null)
  })
})
