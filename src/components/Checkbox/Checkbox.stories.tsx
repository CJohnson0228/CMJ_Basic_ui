import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'

const meta = {
  title: 'Input/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'grey'] },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Labeled: Story = {
  args: {
    label: 'labeled'
  },
}
