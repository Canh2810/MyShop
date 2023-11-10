import { ROUTES, USERS_MOCK } from '@/constants'
import { ILoginForm, User } from '@/types'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const loginService = ({ email, password }: ILoginForm): User | null => {
  const user = USERS_MOCK.find(
    (user) => user.email === email && user.password === password,
  )

  if (!user) return null

  return user
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const user = loginService({
          email: credentials.email,
          password: credentials.password,
        })
        return user
      },
    }),
  ],
  pages: {
    signIn: ROUTES.LOGIN,
    signOut: ROUTES.LOGIN,
  },
}
