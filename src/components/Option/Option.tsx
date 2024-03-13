import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'

export interface OptionProps extends ComponentProps<'option'>{

}

const Option = (props: OptionProps) => {
  const {
    children
  } = props
  const theme = useTheme()

  const OptionItem = styled.option({})

  return (
    <OptionItem>
      {children}
    </OptionItem>
  )
}

export default Option