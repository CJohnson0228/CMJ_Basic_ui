import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'

export interface ButtonProps extends ComponentProps<'button'> {
  label: string,
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  shape?: 'round'|'square'|'semi-round', 
}

const Button = (props: ButtonProps) => {
  const {
    label,
    color = 'blue',
    shape = 'round',
    ...other
  } = props
  const theme = useTheme()

  const ButtonBase = styled.button({
    backgroundColor: theme.colors[color][500],
    color: theme.colors.common.white,
    padding: theme.spacing(1) + ' ' + theme.spacing(2),
    borderRadius: (shape === 'square') ? '0' : (shape === 'round') ? theme.spacing(2) : theme.spacing(1),
    border: 'none',
  })

  return (
    <ButtonBase {...other} >{label}</ButtonBase>
  )
}

export default Button