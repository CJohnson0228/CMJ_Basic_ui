import type { Meta, StoryObj } from '@storybook/react'

import ButtonGroup from './ButtonGroup'
import Button from '../Button'

const meta = {
  title: 'Input/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'grey'] },
    shape: { control: 'select', options: ['square', 'round', 'semi-round'] },
    variant: { control: 'select', options: [ 'outlined', 'filled', 'text']}
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <Button label='one' />
        <Button label='two' />
        <Button label='three' />
      </ButtonGroup>
    )
  }
}
export const Filled: Story = {
  render: (args) => {
    return (
      <ButtonGroup variant='filled' shape='round' color='green' {...args}>
        <Button label='one' />
        <Button label='two' />
        <Button label='three' />
        <Button label='four' />
      </ButtonGroup>
    )
  }
}
export const Outlined: Story = {
  render: (args) => {
    return (
      <ButtonGroup variant='outlined' shape='semi-round' color='yellow' {...args}>
        <Button label='one' />
        <Button label='two' />
      </ButtonGroup>
    )
  }
}
