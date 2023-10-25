import { StoryObj, Meta } from '@storybook/react'

import Badge from '.'
import { CommonVariants } from '@/types'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    title: 'Badge',
  },
}

export const Secondary: Story = {
  args: {
    title: 'Badge',
    variant: CommonVariants.Secondary,
  },
}
