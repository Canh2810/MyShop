import { USERS_MOCK } from '@/constants'
import { ILoginForm } from '@/types'

export const login = ({ email, password }: ILoginForm): boolean => {
  const user = USERS_MOCK.find(
    (user) => user.email === email && user.password === password,
  )

  if (!user) return false

  return true
}
