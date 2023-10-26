'use client'

// Stores
import { useThemeStore } from '@/stores'

// Icons
import { Sunny } from '@/assets'

const DarkModeSwitch = () => {
  const { toggleTheme } = useThemeStore((state) => state)

  return (
    <label htmlFor="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        className="hidden"
        onChange={toggleTheme}
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
