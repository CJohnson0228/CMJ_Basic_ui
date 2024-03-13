import { useRef, ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface SectionMessageProps extends ComponentProps<'div'>  {
  variant?: 'warning'|'caution'|'note', 
}

const SectionMessage = (props: SectionMessageProps) => {
  const {
    variant = 'note',
    children,
    ...other
  } = props
  const theme = useTheme()
  const ContainerRef = useRef<HTMLDivElement>(null)
  
  const SectionMessageContainer = styled.div({
    color: (variant !== 'caution') ? theme.colors.common.white : theme.colors.common.black,
    backgroundColor: (variant === 'note')
      ? theme.colors.grey[500]
      : (variant === 'warning')
        ? theme.colors.red[500]
        : theme.colors.yellow[500],
    padding: theme.spacing(1) + ' ' + theme.spacing(3),
    borderRadius: theme.spacing(1),
  })

  useGSAP(() => {
    gsap.fromTo([ContainerRef.current], {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      duration: 0.2,
      ease: 'power1.inOut'
    })
  })

  return (
    <SectionMessageContainer ref={ContainerRef} {...other}>
      {children}
    </SectionMessageContainer>
  )
}

export default SectionMessage