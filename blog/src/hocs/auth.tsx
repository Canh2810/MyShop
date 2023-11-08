import { ROUTES } from '@/constants'
import { useAuthStore } from '@/stores'
import { redirect } from 'next/navigation'
import { FunctionComponent } from 'react'

export const withAuth = <T extends object>(Component: FunctionComponent<T>) => {
  const AuthComponent = (props: T) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

    if (!isAuthenticated) return redirect(ROUTES.LOGIN)

    return <Component {...props} />
  }

  return AuthComponent
}
