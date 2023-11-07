import { StoryObj, Meta } from '@storybook/react'

import PostCardSkeleton from '.'

export default {
  title: 'Components/PostCardSkeleton',
  component: PostCardSkeleton,
} as Meta

type Story = StoryObj<typeof PostCardSkeleton>

export const Default: Story = {}
