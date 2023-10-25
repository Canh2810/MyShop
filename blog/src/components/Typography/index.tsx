import { TypoColors, TypoVariants } from '@/types'

interface TypographyProps {
  variant?: TypoVariants
  color?: TypoColors
  children: React.ReactNode
  component?: keyof JSX.IntrinsicElements
  className?: string
}

const Typography = ({
  variant = TypoVariants.TextSmall,
  color = TypoColors.Primary,
  children,
  component = 'p',
  className = '',
}: TypographyProps): JSX.Element => {
  const Component = component as keyof JSX.IntrinsicElements

  const variantStyles = {
    [TypoVariants.TextExtraSmall]:
      'font-quaternary text-xs font-normal leading-3',
    [TypoVariants.TextSmall]: 'font-tertiary text-sm font-normal leading-4',
    [TypoVariants.TextMedium]: 'font-primary text-base font-normal leading-5',
    [TypoVariants.TextLarge]: 'font-secondary text-lg font-normal leading-7',
    [TypoVariants.TexExtraLarge]:
      'font-secondary text-xl font-normal leading-7',
    [TypoVariants.HeadingSmall]: 'font-tertiary text-base font-bold leading-6',
    [TypoVariants.HeadingMedium]: 'font-primary text-lg font-bold leading-6',
    [TypoVariants.HeadingLarge]: 'font-primary text-xl font-bold leading-6',
    [TypoVariants.HeadingExtraLarge]:
      'font-primary text-2xl font-bold leading-8',
  }

  const colorStyles = {
    [TypoColors.Primary]: 'text-dark-100 dark:text-light-400',
    [TypoColors.Secondary]: 'text-dark-300 dark:text-white',
    [TypoColors.Tertiary]: 'text-dark-50 dark:text-light-600',
  }

  return (
    <Component
      className={`${variantStyles[variant]} ${colorStyles[color]} ${className}`}
    >
      {children}
    </Component>
  )
}

export default Typography
