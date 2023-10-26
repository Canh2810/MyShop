import { StoryObj, Meta } from '@storybook/react'
import PostList from '.'
import { POSTS_MOCK } from '@/constants'

export default {
  title: 'Components/PostList',
  component: PostList,
} as Meta

type Story = StoryObj<typeof PostList>

export const Default: Story = {
  args: {
    posts: POSTS_MOCK,
  },
}
