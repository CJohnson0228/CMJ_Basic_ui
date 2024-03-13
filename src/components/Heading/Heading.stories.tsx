import type { Meta, StoryObj } from '@storybook/react'

import Heading from './Heading'

const meta = {
  title: 'Layout/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    color: { control: 'select', options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'grey'] },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Heading'
  },
}
export const H1: Story = {
  args: {
    color: 'red',
    variant: 'h1',
    children: 'H1 Heading'
  },
}
export const H2: Story = {
  args: {
    color: 'orange',
    variant: 'h2',
    children: 'H2 Heading'
  },
}
export const H3: Story = {
  args: {
    color: 'yellow',
    variant: 'h3',
    children: 'H3 Heading'
  },
}
export const H4: Story = {
  args: {
    color: 'green',
    variant: 'h4',
    children: 'H4 Heading'
  },
}
export const H5: Story = {
  args: {
    color: 'pink',
    variant: 'h5',
    children: 'H5 Heading'
  },
}
export const H6: Story = {
  args: {
    color: 'violet',
    variant: 'h6',
    children: 'H6 Heading'
  },
}

