import type { Meta, StoryObj } from '@storybook/react'

import RadioGroup from './RadioGroup'
import Radio from '../Radio'

const meta = {
  title: 'Input/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'grey'] },
    vertical: { control: 'boolean' }
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <Radio label='one' />
        <Radio label='two' />
        <Radio label='three' />
      </RadioGroup>
    )
  }
}

