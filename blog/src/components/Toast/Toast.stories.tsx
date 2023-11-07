import { StoryObj, Meta } from '@storybook/react'

import Toast from '.'
import { CommonStatus } from '@/types'

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta

type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    title: 'This is title',
    onClose: () => alert('Close modal'),
  },
}

export const Failed: Story = {
  args: {
    title: 'This is title',
    status: CommonStatus.Failed,
    onClose: () => alert('Close modal'),
  },
}
