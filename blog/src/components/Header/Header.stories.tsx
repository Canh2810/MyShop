import { StoryObj, Meta } from '@storybook/react'

import Header from '.'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
