import type { Meta, StoryObj } from '@storybook/react'

import SectionMessage from './SectionMessage'
import Heading from '../Heading'
import Text from '../Text'

const meta = {
  title: 'Info/SectionMessage',
  component: SectionMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: [ 'warning', 'caution', 'note' ]},
  },
} satisfies Meta<typeof SectionMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <SectionMessage {...args}>
        <Heading variant='h3' style={{ color: 'inherit' }}>Heading</Heading>
        <Text variant='body1' style={{ color: 'inherit' }}>Some Text</Text>
        <Text variant='body4' style={{ color: 'inherit' }}>More Text</Text>
      </SectionMessage>
    )
  }
}