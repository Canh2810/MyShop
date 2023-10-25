// Libs
import { useState } from 'react'
import { useTheme } from 'next-themes'

// Icons
import { Sunny } from '@/assets'

const DarkModeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleChange = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    setIsChecked((prev) => !prev)
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
        className={`bg-light-200 dark:bg-dark-50 p-0.5 cursor-pointer rounded-[100px] h-xs w-xs ${
          isChecked && 'bg-primary-500'
        }`}
      >
        <div
          className={`absolute bg-white w-[24px] h-[24px] p-[5px] rounded-[50%] duration-300 ${
            isChecked && 'translate-x-[20px]'
          } `}
        >
          <Sunny />
        </div>
      </div>
    </label>
  )
}

export default DarkModeSwitch
