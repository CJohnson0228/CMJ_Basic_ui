import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'
import { ThemeTypes } from '../../styles/theme/ThemeTypes'

export interface ModalProps extends ComponentProps<'div'>{
  open: boolean
}

interface ModalBackdropProps extends ModalProps { theme: ThemeTypes }
interface ModalBaseProps { theme: ThemeTypes }

const ModalBackdrop = styled.div<ModalBackdropProps>(props => ({
  position: 'fixed',
  top: 0, left: 0,
  width: '100vw', height: '100vh',
  backgroundColor: props.theme.colors.common.black + '33',
  display: props.open ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'center',
}))

const ModalBase = styled.div<ModalBaseProps>(props => ({
  color: props.theme.colors.common.text,
  backgroundColor: props.theme.colors.common.paper,
  padding: props.theme.spacing(2),
  borderRadius: props.theme.spacing(0.75),
  boxShadow: props.theme.shadows.boxShadows[200],
}))

const Modal = (props: ModalProps) => {
  const { open = false, children } = props
  const theme = useTheme()

  return (
    <ModalBackdrop open={open} theme={theme}>
      <ModalBase theme={theme}>{ children }</ModalBase>
    </ModalBackdrop>
  )
}

export default Modal