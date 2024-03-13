import { Children, cloneElement, ReactElement, ReactNode } from 'react'
import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'
import { ButtonProps } from '../Button/Button';
import { ThemeTypes } from '../../styles/theme/ThemeTypes';


export interface ButtonGroupProps extends ComponentProps<'div'> {
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  shape?: 'round' | 'square' | 'semi-round', 
  variant?: 'outlined' | 'filled' | 'text',
}

const ButtonGroupBase = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

const renderChildren = (
  children: ReactNode|ReactNode[],
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  shape: 'round' | 'square' | 'semi-round', 
  variant: 'outlined' | 'filled' | 'text',
  theme: ThemeTypes
) => {
  const length = Children.toArray(children).length

  return Children.map(children, (child, index) => {
    if (child) {
      return cloneElement(child as ReactElement<ButtonProps>, {
        color: color,
        variant: variant,
        style: {
          borderTopLeftRadius: (index === 0) ? (shape === 'square') ? '0' : theme.spacing((shape === 'round') ? 3 : 1.5) : 0,
          borderBottomLeftRadius: (index === 0) ? (shape === 'square') ? '0' : theme.spacing((shape === 'round') ? 3 : 1.5) : 0,
          borderTopRightRadius: (index === length-1) ? (shape === 'square') ? '0' : theme.spacing((shape === 'round') ? 3 : 1.5) : 0,
          borderBottomRightRadius: (index === length-1) ? (shape === 'square') ? '0' : theme.spacing((shape === 'round') ? 3 : 1.5) : 0,
        }
      })
    }
  })
}

const ButtonGroup = (props: ButtonGroupProps) => {
  const {
    color = 'blue',
    shape = 'square',
    variant = 'text',
    children,
    ...other
  } = props
  const theme = useTheme()

  return (
    <ButtonGroupBase {...other}>
      {renderChildren(children, color, shape, variant, theme)}
    </ButtonGroupBase>
  )
}

export default ButtonGroup