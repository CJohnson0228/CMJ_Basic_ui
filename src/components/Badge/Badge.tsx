import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'
import { ThemeTypes } from '../../styles/theme/ThemeTypes';

export interface BadgeProps extends ComponentProps<'div'> {
  text: string,
  color?: 'red'|'orange'|'yellow'|'green'|'blue'|'violet'|'purple'|'pink'|'grey',
}

interface BadgeBaseProps {
  theme: ThemeTypes,
  color: 'red'|'orange'|'yellow'|'green'|'blue'|'violet'|'purple'|'pink'|'grey',
}

const BadgeBase = styled.div<BadgeBaseProps>(props => ({
  fontFamily: '"Montserrat"',
  color: props.theme.colors.common.white,
  padding: props.theme.spacing(0.5) + ' ' + props.theme.spacing(1.3),
  borderRadius: props.theme.spacing(2),
  fontSize: props.theme.spacing(2),
  boxShadow: props.theme.shadows.boxShadows[100],
  backgroundColor: props.theme.colors[props.color][500] + 'bb'
}))

const Badge = (props: BadgeProps) => {
  const {
    text,
    color = 'blue',
    ...other
  } = props
  const theme = useTheme()

  return (
    <BadgeBase
      theme={theme}
      color={color}
      {...other}
    >
      {text}
    </BadgeBase>
  )
}

export default Badge