'use client'

import { Typography, Badge, Advertisement, DarkModeSwitch } from '@/components'
import { TypoColors, TypoVariants } from '@/types'

const Home = () => {
  return (
    <>
      <Typography>This is text</Typography>
      <Typography
        variant={TypoVariants.TextMedium}
        color={TypoColors.Secondary}
      >
        This is text
      </Typography>
      <Typography
        variant={TypoVariants.HeadingExtraLarge}
        color={TypoColors.Tertiary}
      >
        This is text
      </Typography>
      <DarkModeSwitch />
      <Badge title="Title" />
      <Advertisement />
    </>
  )
}

export default Home
