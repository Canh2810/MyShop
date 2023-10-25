'use client'

// Libs
import { useTheme } from 'next-themes'

// Icons
import { Sunny } from '@/assets'
import { THEMES } from '@/constants'

const DarkModeSwitch = () => {
  const { resolvedTheme = 'light', setTheme } = useTheme()

  const handleChange = () => {
    setTheme(resolvedTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
  }

  return (
    <label htmlFor="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        className="hidden"
        onChange={handleChange}
      />
      <div
        className={`p-0.5  cursor-pointer rounded-[100px] h-xs w-xs bg-light-200 dark:bg-primary-500`}
      >
        <div
          className={`absolute bg-white w-[24px] h-[24px] p-[5px] rounded-[50%] duration-300 dark:translate-x-[20px]`}
        >
          <Sunny />
        </div>
      </div>
    </label>
  )
}

export default DarkModeSwitch
