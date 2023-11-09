import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LOCAL_STORAGE_KEY } from '@/constants'

interface AuthState {
  email: string | null
}

type AuthActions = {
  login: (email: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      email: null,
      login: (email: string) =>
        set({
          email,
        }),
      logout: () =>
        set({
          email: null,
        }),
    }),
    {
      name: LOCAL_STORAGE_KEY.AUTH,
      skipHydration: true,
    },
  ),
)
