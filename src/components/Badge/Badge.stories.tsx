import type { Meta, StoryObj } from '@storybook/react'

import Badge from './Badge'

const meta = {
  title: 'Info/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'select', options: ['red','orange','yellow','green','blue','violet','purple','pink', 'grey'] }
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    text: '4k',
  },
};

export const WithColor: Story = {
  args: {
    text: '-40',
    color: 'red',
  }
}

export const WithDivProps: Story = {
  args: {
    text: 'with props',
    style: { color: 'greenyellow', backgroundColor: 'darkblue' }
  }
}