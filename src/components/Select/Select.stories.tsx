import type { Meta, StoryObj } from '@storybook/react'

import Select from './Select'
import Option from '../Option'

const meta = {
  title: 'Input/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <Option>Option One</Option>
        <Option>Option Two</Option>
        <Option>Option Three</Option>
      </Select>
    )
  }
}