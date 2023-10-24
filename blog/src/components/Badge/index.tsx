// Types
import { commonVariants } from '@/types'

export interface BadgeProps {
  variant?: commonVariants
  title: string
}

const Badge = ({ variant = commonVariants.Primary, title }: BadgeProps) => {
  let badgeStyle
  switch (variant) {
    case commonVariants.Secondary:
      badgeStyle = 'bg-dark-800 text-primary-500'
      break

    default:
      badgeStyle = 'bg-primary-500 text-white'
      break
  }
  return (
    <span
      className={`${badgeStyle} rounded-md px-2.5 py-1 text-xs font-normal leading-3`}
    >
      {title}
    </span>
  )
}

export default Badge
