import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import { ButtonVariants } from '@/types'
import { CircularProgress } from '..'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    [ButtonVariants.Outlined]:
      'bg-white dark:bg-dark-300 text-dark-50 border border-solid border-light-700',
    [ButtonVariants.Container]: 'bg-primary-500 text-white',
  }

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`px-5 py-3 rounded-md hover:opacity-70 disabled:opacity-40 ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {isLoading && <CircularProgress />}
    </button>
  )
}

export default memo(Button)
