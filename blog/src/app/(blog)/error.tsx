'use client'

// Components
import { Typography } from '@/components'
import { TypoVariants } from '@/types'

// Constants
import { ERROR_MESSAGES } from '@/constants'

const Error = () => {
  return (
    <Typography variant={TypoVariants.TextLarge}>
      {ERROR_MESSAGES.FAIL_TO_FETCH}
    </Typography>
  )
}

export default Error
