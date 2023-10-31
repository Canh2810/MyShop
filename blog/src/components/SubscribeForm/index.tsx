'use client'

import { ButtonVariants, TypoVariants } from '@/types'
import { Button, TextField, Typography } from '..'
import { Email } from '@/assets'

const SubscribeForm = () => {
  return (
    <form
      action=""
      className="p-8 text-center bg-white dark:bg-dark-200 rounded-xl"
    >
      <div className="mb-[30px]">
        <Typography variant={TypoVariants.HeadingMedium}>
          Weekly Newsletter
        </Typography>
        <Typography>Get blog articles and offers via email</Typography>
      </div>
      <TextField
        icon={<Email />}
        id="email"
        name="email"
        placeholder="Your Email"
        value={''}
        onChange={() => {}}
      />
      <Button
        variant={ButtonVariants.Container}
        className="w-full mt-2"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  )
}

export default SubscribeForm
