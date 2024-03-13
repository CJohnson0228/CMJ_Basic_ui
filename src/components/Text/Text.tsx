import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'

interface TextProps extends ComponentProps<'p'>  {
  color?: 'default' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  children: string,
  variant?: 'body1'|'body2'|'body3'|'body4',
}

const Text = (props: TextProps) => {
  const {
    color = 'default',
    children,
    variant = 'body2',
    ...other
  } = props
  const theme = useTheme()

  const TextMain = styled.p({
    color: (color === 'default') ? theme.colors.common.text : theme.colors[color][500],
    fontFamily: '"Montserrat"',
    fontWeight: 300,
  })

  const TextBody1 = styled(TextMain)({ fontSize: theme.spacing(2.3) })
  const TextBody2 = styled(TextMain)({ fontSize: theme.spacing(2) })
  const TextBody3 = styled(TextMain)({ fontSize: theme.spacing(1.8) })
  const TextBody4 = styled(TextMain)({ fontSize: theme.spacing(1.5) })

  const Elements = {
    body1: <TextBody1 {...other}>{children}</TextBody1>,
    body2: <TextBody2 {...other}>{children}</TextBody2>,
    body3: <TextBody3 {...other}>{children}</TextBody3>,
    body4: <TextBody4 {...other}>{children}</TextBody4>,
  }

  return Elements[variant]
}

export default Text