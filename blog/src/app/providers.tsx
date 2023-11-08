// app/providers.tsx
'use client'

import { Hydration } from '@/components'
import { useThemeStore } from '@/stores'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

const queryClient = new QueryClient()

export const Providers = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  const theme = useThemeStore((state) => state.theme)

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <html lang="en" className={className + theme}>
          <body className="dark:bg-dark-300">
            <Hydration />
            {children}
          </body>
        </html>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  )
}
