import type { Meta, StoryObj } from '@storybook/react'

import CheckboxGroup from './CheckboxGroup'
import Checkbox from '../Checkbox'

const meta = {
  title: 'Input/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'grey'] },
    vertical: { control: 'boolean' }
  },
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <CheckboxGroup {...args}>
        <Checkbox label='one' />
        <Checkbox label='two' />
        <Checkbox label='three' />
      </CheckboxGroup>
    )
  }
}

