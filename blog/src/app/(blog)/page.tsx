'use client'

import { Typography, Button } from '@/components'
import { ButtonVariants, TypoColors, TypoVariants } from '@/types'
import { useTheme } from 'next-themes'

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <>
      {/* <h1 className="font-primary text-2xl leading-8">This is text</h1>
      <h1 className="font-secondary text-light-700">This is text</h1>
      <h1 className="font-tertiary">This is text</h1>
      <h1 className="font-quaternary">This is text</h1> */}
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
    </>
  )
}

export default Home
