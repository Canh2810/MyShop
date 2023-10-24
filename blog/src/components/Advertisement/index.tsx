import { TypoColors, TypoVariants } from '@/types'
import { Typography } from '..'

const Advertisement = () => (
  <div className="bg-light-200 dark:bg-dark-200 rounded-xl flex flex-col items-center justify-center w-lg h-sm my-0 mx-auto">
    <Typography
      variant={TypoVariants.TextExtraSmall}
      className="text-dark-50 dark:text-dark-50"
    >
      Advertisement
    </Typography>
    <Typography
      variant={TypoVariants.HeadingMedium}
      color={TypoColors.Tertiary}
    >
      You can place ads
    </Typography>
    <Typography
      variant={TypoVariants.TextMedium}
      className="text-dark-50 dark:text-dark-50"
    >
      750x100
    </Typography>
  </div>
)

export default Advertisement
