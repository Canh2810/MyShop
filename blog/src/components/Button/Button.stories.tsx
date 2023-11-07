import { StoryObj, Meta } from '@storybook/react'

import Button from './'
import { ButtonVariants } from '@/types'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: ButtonVariants.Outlined,
    children: 'Click me',
    onClick: () => {
      alert('Button component')
    },
  },
}

export const Container: Story = {
  args: {
    variant: ButtonVariants.Container,
    children: 'Click me',
    onClick: () => {
      alert('Button component')
    },
  },
}

export const Text: Story = {
  args: {
    variant: ButtonVariants.Text,
    children: 'Click me',
    onClick: () => {
      alert('Button component')
    },
  },
}
