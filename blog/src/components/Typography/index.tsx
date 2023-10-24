import { TypoColors, TypoVariants } from '../../types'

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
  let textStyle
  let textColor

  switch (variant) {
    case TypoVariants.TextExtraSmall:
      textStyle = 'font-quaternary text-xs font-normal leading-3'
      break
    case TypoVariants.TextMedium:
      textStyle = 'font-primary text-base font-normal leading-5'
      break
    case TypoVariants.TextLarge:
      textStyle = 'font-secondary text-lg font-normal leading-7'
      break
    case TypoVariants.TexExtraLarge:
      textStyle = 'font-secondary text-xl font-normal leading-7'
      break
    case TypoVariants.HeadingSmall:
      textStyle = 'font-tertiary text-base font-bold leading-6'
      break
    case TypoVariants.HeadingMedium:
      textStyle = 'font-primary text-lg font-bold leading-6'
      break
    case TypoVariants.HeadingLarge:
      textStyle = 'font-primary text-xl font-bold leading-6'
      break
    case TypoVariants.HeadingExtraLarge:
      textStyle = 'font-primary text-2xl font-bold leading-8'
      break
    default:
      textStyle = 'font-tertiary text-sm font-normal leading-4'
  }

  switch (color) {
    case TypoColors.Secondary:
      textColor = 'text-dark-300 dark:text-white'
      break
    case TypoColors.Tertiary:
      textColor = 'text-dark-50 dark:text-light-600'
      break
    default:
      textColor = 'text-dark-100 dark:text-light-400'
  }

  return (
    <Component className={`${textStyle} ${textColor} ${className}`}>
      {children}
    </Component>
  )
}

export default Typography
