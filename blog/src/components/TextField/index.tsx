'use client'

// Libs
import { ChangeEvent, memo } from 'react'

// Types
import { TextFieldTypes, TextFieldVariants } from '@/types'

export interface TextFieldProps {
  variant?: TextFieldVariants
  icon: JSX.Element
  name: string
  placeholder: string
  id: string
  value: string
  type?: TextFieldTypes
  errorMessage?: string
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({
  variant = TextFieldVariants.Outlined,
  icon,
  name,
  placeholder,
  id,
  value,
  type = TextFieldTypes.Text,
  className = '',
  errorMessage,
  onChange,
}: TextFieldProps) => {
  const testFiledStyles = {
    [TextFieldVariants.Outlined]:
      'border border-solid border-light-700 text-dark-50 bg-white dark:bg-dark-200',
    [TextFieldVariants.Filled]: 'bg-light-100 dark:bg-dark-200 text-light-500 ',
  }

  return (
    <div
      className={`relative flex items-center px-4  py-3 rounded-md text-sm ${testFiledStyles[variant]} ${className} `}
    >
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        className="w-full bg-transparent text-light-500 focus:outline-0"
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon}
      {errorMessage && (
        <p className="absolute top-12 text-xs text-danger">{errorMessage}</p>
      )}
    </div>
  )
}

export default memo(TextField)
