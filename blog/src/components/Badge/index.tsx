// Types
import { CommonVariants } from '@/types'

export interface BadgeProps {
  variant?: CommonVariants
  title: string
}

const Badge = ({ variant = CommonVariants.Primary, title }: BadgeProps) => {
  const badgeStyles = {
    [CommonVariants.Primary]: 'bg-primary-500 text-white',
    [CommonVariants.Secondary]: 'bg-dark-800 text-primary-500',
  }

  return (
    <span
      className={`${badgeStyles[variant]} rounded-md px-2.5 py-1 text-xs font-normal leading-3`}
    >
      {title}
    </span>
  )
}

export default Badge
