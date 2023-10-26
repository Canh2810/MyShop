import { StoryObj, Meta } from '@storybook/react'
import Menu from '.'
import { MenuVariants } from '@/types'
import { LIST_MENU_ITEM_MOCK } from '@/constants'

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {
  args: {
    listItems: LIST_MENU_ITEM_MOCK,
  },
}

export const Vertical: Story = {
  args: {
    listItems: LIST_MENU_ITEM_MOCK,
    variant: MenuVariants.Vertical,
  },
}
