import { rest } from 'msw'
import { MOCK_URL, END_POINTS, USERS_MOCK, ERROR_MESSAGES } from '@/constants'

export const handlers = [
  // Login
  rest.post(MOCK_URL + END_POINTS.LOGIN, async (req, res, ctx) => {
    const { email, password } = (await req.json()) as {
      email: string
      password: string
    }

    if (!email || !password) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Missing username or password' }),
      )
    }

    const user = USERS_MOCK.find(
      (user) => user.email === email && user.password === password,
    )

    if (user) {
      return res(ctx.status(200), ctx.json({ token: 'login_mock' }))
    }

    return res(
      ctx.status(401),
      ctx.json({
        message: ERROR_MESSAGES.LOGIN_INVALID,
      }),
    )
  }),
]
