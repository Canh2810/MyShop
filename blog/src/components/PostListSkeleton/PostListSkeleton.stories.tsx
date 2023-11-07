import { StoryObj, Meta } from '@storybook/react'

import PostListSkeleton from '.'

export default {
  title: 'Components/PostListSkeleton',
  component: PostListSkeleton,
} as Meta

type Story = StoryObj<typeof PostListSkeleton>

export const Default: Story = {}
