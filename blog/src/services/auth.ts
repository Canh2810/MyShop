import { ERROR_MESSAGES, USERS_MOCK } from '@/constants'
import { ILoginForm, CommonStatus } from '@/types'
import { LoginResponse } from '@/types'
import { NextResponse } from 'next/server'

export const loginService = ({
  email,
  password,
}: ILoginForm): LoginResponse => {
  const user = USERS_MOCK.find(
    (user) => user.email === email && user.password === password,
  )

  if (!user)
    return {
      status: CommonStatus.Failed,
      message: ERROR_MESSAGES.LOGIN_INVALID,
    }

  NextResponse.next().cookies.set({
    name: 'auth',
    value: 'auth',
    path: '/',
  })

  return {
    status: CommonStatus.Success,
    data: user,
  }
}
