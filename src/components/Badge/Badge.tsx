import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'

export interface BadgeProps extends ComponentProps<'div'> {
  text: string,
  appearance?: 'red'|'orange'|'yellow'|'green'|'blue'|'violet'|'purple'|'pink'|'grey',
}

const Badge = (props: BadgeProps) => {
  const {
    text,
    appearance = 'blue',
    ...other
  } = props
  const theme = useTheme()

  const BadgeBase = styled.div({
    color: theme.colors.common.white,
    backgroundColor: theme.colors[appearance][500] + 'bb',
    padding: theme.spacing(0.5) + ' ' + theme.spacing(1.3),
    borderRadius: theme.spacing(2),
    fontFamily: '"Montserrat"',
    fontSize: theme.spacing(2),
    boxShadow: theme.shadows.boxShadows[100],
  })

  return (
    <BadgeBase {...other}>{text}</BadgeBase>
  )
}

export default Badge