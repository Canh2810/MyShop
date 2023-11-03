import '@testing-library/jest-dom'

import { USERS_MOCK } from '@/constants'
import { login } from '..'

const mockUsers = USERS_MOCK

describe('login function', () => {
  it('returns true for a valid user', () => {
    const validUser = mockUsers[0] // Assuming the first user in the mock data is valid
    const result = login({
      email: validUser.email,
      password: validUser.password,
    })
    expect(result).toBe(true)
  })

  it('returns false for an invalid user', () => {
    const invalidUser = {
      email: 'invalid@example.com',
      password: 'wrongpassword',
    }
    const result = login(invalidUser)
    expect(result).toBe(false)
  })
})
