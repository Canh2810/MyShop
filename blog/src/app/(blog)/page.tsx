'use client'

import { Typography, Button, Badge, Advertisement } from '@/components'
import { ButtonVariants, TypoColors, TypoVariants } from '@/types'
import { useTheme } from 'next-themes'

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme()
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
      <Button
        variant={ButtonVariants.Container}
        onClick={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }}
      >
        Toggle
      </Button>
      <Badge title="Title" />
      <Advertisement />
    </>
  )
}

export default Home
