import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'
import { ThemeTypes } from '../../styles/theme/ThemeTypes'

export interface HeadingProps extends ComponentProps<'h1'>  {
  color?: 'default' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  children: string,
  variant?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
}

interface HeadingBaseProps {
  theme: ThemeTypes,
  color: 'default' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
}

const HeadingMain = styled.h1<HeadingBaseProps>(props => ({
  color: (props.color === 'default') ? props.theme.colors.common.text : props.theme.colors[props.color][500],
  fontFamily: '"Montserrat"',
  fontWeight: 500, 
}))

const HeadingH1 = styled(HeadingMain)(props => ({ fontSize: props.theme.spacing(5.5) }))
const HeadingH2 = styled(HeadingMain)(props => ({ fontSize: props.theme.spacing(5) }))
const HeadingH3 = styled(HeadingMain)(props => ({ fontSize: props.theme.spacing(4) }))
const HeadingH4 = styled(HeadingMain)(props => ({ fontSize: props.theme.spacing(3.5) }))
const HeadingH5 = styled(HeadingMain)(props => ({ fontSize: props.theme.spacing(3) }))
const HeadingH6 = styled(HeadingMain)(props => ({ fontSize: props.theme.spacing(2.5) }))
  
const Heading = (props: HeadingProps) => {
  const {
    color = 'default',
    children,
    variant = 'h1',
    ...other
  } = props
  const theme = useTheme()

  const Elements = {
    h1: <HeadingH1 color={color} theme={theme} {...other}>{children}</HeadingH1>,
    h2: <HeadingH2 color={color} theme={theme} {...other}>{children}</HeadingH2>,
    h3: <HeadingH3 color={color} theme={theme} {...other}>{children}</HeadingH3>,
    h4: <HeadingH4 color={color} theme={theme} {...other}>{children}</HeadingH4>,
    h5: <HeadingH5 color={color} theme={theme} {...other}>{children}</HeadingH5>,
    h6: <HeadingH6 color={color} theme={theme} {...other}>{children}</HeadingH6>,
  }

  return Elements[variant]
}

export default Heading