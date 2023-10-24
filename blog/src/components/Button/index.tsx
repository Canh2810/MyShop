import { ButtonVariants } from '@/types'
import { ReactNode, memo } from 'react'

interface ButtonProps {
  variant?: ButtonVariants
  children: ReactNode
  isLoading?: boolean
  className?: string
  onClick?: () => void
}

const Button = ({
  variant = ButtonVariants.Outlined,
  children,
  isLoading,
  className = '',
  onClick,
}: ButtonProps) => {
  let buttonStyle
  switch (variant) {
    case ButtonVariants.Container:
      buttonStyle = 'bg-primary-500 text-white'
      break

    default:
      buttonStyle =
        'bg-white dark:bg-dark-300 text-dark-50 border border-solid border-light-700'
      break
  }

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`px-5 py-3 rounded-md hover:opacity-70 ${buttonStyle} ${className}`}
    >
      {children}
    </button>
  )
}

export default memo(Button)
