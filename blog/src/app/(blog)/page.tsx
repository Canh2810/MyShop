'use client'

import { Search } from '@/assets'
import {
  Typography,
  Badge,
  Advertisement,
  DarkModeSwitch,
  TextField,
} from '@/components'
import { TypoColors, TypoVariants } from '@/types'

const Home = () => {
  const props = {
    icon: <Search />,
    name: 'test',
    placeholder: 'test',
    id: 'test',
    value: 'test',
    onChange: () => {},
  }
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
      <TextField {...props} />
      <Badge title="Title" />
      <Advertisement />
    </>
  )
}

export default Home
