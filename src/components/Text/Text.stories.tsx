import type { Meta, StoryObj } from '@storybook/react'

import Text from './Text'

const meta = {
  title: 'Layout/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['body1','body2','body3','body4'] },
    color: { control: 'select', options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'grey'] },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Text'
  },
}
export const Body1: Story = {
  args: {
    color: 'red',
    variant: 'body1',
    children: 'body1 Text'
  },
}
export const Body2: Story = {
  args: {
    color: 'orange',
    variant: 'body2',
    children: 'body2 Text'
  },
}
export const Body3: Story = {
  args: {
    color: 'yellow',
    variant: 'body3',
    children: 'body3 Text'
  },
}
export const Body4: Story = {
  args: {
    color: 'green',
    variant: 'body4',
    children: 'body4 Text'
  },
}
