// Component
import { Button, Menu, TextField, Typography } from '..'

// Type
import { ButtonVariants, MenuVariants, TypoColors, TypoVariants } from '@/types'

// Constants
import { CATEGORY, POlICY, QUICK_LINK } from '@/constants'

//
import { Email, LogoLarge } from '@/assets'

const Footer = () => {
  return (
    <div className="pt-16 px-[352px] bg-light-50 dark:bg-dark-400">
      <div className="flex items-center justify-between mb-16">
        <div className="w-[289px]">
          <div className="mb-6">
            <Typography variant={TypoVariants.HeadingSmall} className="mb-3">
              About
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </div>
          <div>
            <Typography
              component="span"
              variant={TypoVariants.TextSmall}
              color={TypoColors.Secondary}
              className="font-bold"
            >
              Email
            </Typography>
            : <Typography component="span">info@jstemplate.net</Typography>
          </div>
          <div>
            <Typography
              component="span"
              color={TypoColors.Secondary}
              className="font-bold"
            >
              Phone
            </Typography>
            :{' '}
            <Typography component="span" variant={TypoVariants.TextSmall}>
              880 123 456 789
            </Typography>
          </div>
        </div>
        <div className=" flex items-center gap-20">
          <div>
            <Typography variant={TypoVariants.HeadingSmall}>
              Quick Link
            </Typography>
            <Menu
              listItems={QUICK_LINK}
              variant={MenuVariants.Vertical}
              className="mt-6"
            />
          </div>
          <div>
            <Typography variant={TypoVariants.HeadingSmall}>
              Category
            </Typography>
            <Menu
              listItems={CATEGORY}
              variant={MenuVariants.Vertical}
              className="mt-6"
            />
          </div>
        </div>
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
      </div>
      <div className="flex items-center justify-between py-8 border-t border-solid border-light-200 dark:border-dark-200">
        <LogoLarge />
        <Menu listItems={POlICY} />
      </div>
    </div>
  )
}

export default Footer
