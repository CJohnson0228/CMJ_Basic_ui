import type { Meta, StoryObj } from '@storybook/react'

import Radio from './Radio'

const meta = {
  title: 'Input/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'grey'] },
  },
} satisfies Meta<typeof Radio>

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
