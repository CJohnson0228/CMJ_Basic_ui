import type { Meta, StoryObj } from '@storybook/react'

import Range from './Range'

const meta = {
  title: 'Input/Range',
  component: Range,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    min: { control: 'text' },
    max: { control: 'text' },
    color: { control: 'select', options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'grey'] },
  },
} satisfies Meta<typeof Range>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default',
    color: 'orange',
  },
}
