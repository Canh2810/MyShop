'use client'

// Libs
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// Assets
import { ChevronDown, Logo, Search } from '@/assets'

// Component
import { DarkModeSwitch, Menu, TextField, Typography } from '..'

// Constants
import { HEADER_MENU, ROUTES } from '@/constants'

// Stores
import { useAuthStore, useQueryStore } from '@/stores'
import { signOut } from 'next-auth/react'

const Header = () => {
  const [isShowDropDown, setIsShowDropdown] = useState<boolean>(false)
  const query = useQueryStore((state) => state.query)
  const setQuery = useQueryStore((state) => state.setQuery)
  const logout = useAuthStore((state) => state.logout)
  const email = useAuthStore((state) => state.email)
  const router = useRouter()

  /**
   * Handle search
   * @param event search value
   */
  const handleChangeSearchBar = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)
    },
    [],
  )

  // Toggle dropdown
  const handleToggleDropdown = useCallback(() => {
    setIsShowDropdown((prev: boolean) => !prev)
  }, [])

  // Handle logout
  const handleLogout = useCallback(() => {
    // Clear token in local storage and session
    logout()
    signOut({
      redirect: false,
    })
    // Navigate to login page
    router.push(ROUTES.LOGIN)
  }, [logout, router])

  return (
    <div className="py-8 max-w-[1216px] mx-auto flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white dark:bg-dark-300">
      <Link href={ROUTES.HOME}>
        <Logo />
      </Link>
      <Menu listItems={HEADER_MENU} />
      <div className="relative flex items-center gap-4">
        <TextField
          name="search"
          id="search"
          placeholder="search"
          value={query}
          icon={<Search />}
          onChange={handleChangeSearchBar}
        />
        <DarkModeSwitch />

        {email && (
          <div
            className="flex items-center gap-1 cursor-pointer hover:opacity-70"
            onClick={handleToggleDropdown}
          >
            <Typography>{email}</Typography>
            <ChevronDown />
            {isShowDropDown && (
              <ul className="absolute right-[-40px] top-8 ">
                <li
                  onClick={handleLogout}
                  className="cursor-pointer hover:opacity-70"
                >
                  <Typography>Logout</Typography>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
