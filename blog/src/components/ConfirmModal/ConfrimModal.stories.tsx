import { StoryObj, Meta } from '@storybook/react'

import ConfirmModal from '.'

export default {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
} as Meta

type Story = StoryObj<typeof ConfirmModal>

export const Default: Story = {
  args: {
    title: 'Confirm this modal',
    onSubmit: () => alert('Submit modal'),
    onClose: () => alert('Close modal'),
  },
}
