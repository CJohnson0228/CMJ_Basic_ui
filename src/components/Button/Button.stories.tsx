import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
  title: 'Input/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: { control: 'select', options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'grey'] },
    shape: { control: 'select', options: ['square', 'round', 'semi-round'] },
    variant: { control: 'select', options: [ 'outlined', 'filled', 'text']}
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default',
  },
}

export const Outlined: Story = {
  args: {
    label: 'outlined',
    color: 'red',
    variant: 'outlined',
  }
}

export const Filled: Story = {
  args: {
    label: 'Filled',
    color: 'orange',
    variant: 'filled',
  }
}