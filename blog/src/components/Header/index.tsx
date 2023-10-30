// Libs
import { useCallback } from 'react'

// Assets
import { Logo, Search } from '@/assets'

// Component
import { DarkModeSwitch, Menu, TextField } from '..'

// Constants
import { HEADER_MENU } from '@/constants'

// Stores
import { useQueryStore } from '@/stores'

const Header = () => {
  const query = useQueryStore((state) => state.query)
  const setQuery = useQueryStore((state) => state.setQuery)

  const handleChangeSearchBar = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)
    },
    [],
  )

  return (
    <div className="py-8 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <Logo />
      <Menu listItems={HEADER_MENU} />
      <div className="flex items-center gap-4">
        <TextField
          name="search"
          id="search"
          placeholder="search"
          value={query}
          icon={<Search />}
          onChange={handleChangeSearchBar}
        />
        <DarkModeSwitch />
      </div>
    </div>
  )
}

export default Header
