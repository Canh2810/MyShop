import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/types'
import { LOCAL_STORAGE_KEY } from '@/constants'

interface AuthState {
  isAuthenticated: null | boolean
  user: User | null
}

type AuthActions = {
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      isAuthenticated: null,
      user: null,
      login: (user: User) =>
        set({
          isAuthenticated: true,
          user,
        }),
      logout: () =>
        set({
          isAuthenticated: false,
          user: null,
        }),
    }),
    {
      name: LOCAL_STORAGE_KEY.AUTH,
      skipHydration: true,
    },
  ),
)
