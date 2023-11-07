import { StoryObj, Meta } from '@storybook/react'
import PostList from '.'

export default {
  title: 'Components/PostList',
  component: PostList,
} as Meta

type Story = StoryObj<typeof PostList>

export const Default: Story = {}
