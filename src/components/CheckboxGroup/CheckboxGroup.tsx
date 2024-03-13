import { Children, cloneElement, ReactElement, ReactNode } from 'react'
import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { CheckboxProps } from '../Checkbox/Checkbox'

export interface CheckboxGroupProps extends ComponentProps<'div'> {
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  vertical?: boolean
}

interface CheckboxGroupBaseProps {
  vertical: boolean
}

const CheckboxGroupBase = styled.div<CheckboxGroupBaseProps>(props => ({
  position: 'relative',
  display: 'flex',
  flexDirection: props.vertical ? 'column' : 'row',
}))

const renderChildren = (
  children: ReactNode | ReactNode[],
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
) => {
  return Children.map(children, (child) => {
    if (child) {
      return cloneElement(child as ReactElement<CheckboxProps>, {
        color: color,
        style: {
          margin: '5px',
        }
      })
    }
  })
}
  
const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { color = 'blue', vertical = true, children, ...other } = props

  return (
    <CheckboxGroupBase vertical={vertical} {...other}>
      {renderChildren(children, color)}
    </CheckboxGroupBase>
  )
}

export default CheckboxGroup