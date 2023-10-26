// Libs
import { memo } from 'react'
import Link from 'next/link'

// Types
import { IMenuItem, MenuVariants } from '@/types'

export interface MenuProps {
  listItems: IMenuItem[]
  variant?: MenuVariants
  className?: string
}

const Menu = ({
  listItems,
  variant = MenuVariants.Horizontal,
  className = '',
}: MenuProps) => {
  const menuStyles = {
    [MenuVariants.Horizontal]: ' gap-[30px]',
    [MenuVariants.Vertical]: 'flex-col gap-2 ',
  }

  const menuItemStyles = {
    [MenuVariants.Horizontal]: 'font-primary  dark:text-white',
    [MenuVariants.Vertical]: 'font-tertiary  dark:text-light-400',
  }

  return (
    <ul
      className={`flex items-center justify-center ${menuStyles[variant]} ${className}`}
    >
      {listItems.map(({ title, href }: IMenuItem) => (
        <li
          key={title}
          className={`text-sm font-normal hover:opacity-70 text-dark-100 ${menuItemStyles[variant]}`}
        >
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default memo(Menu)
