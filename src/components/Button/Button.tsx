import { useState, useEffect, useRef, MutableRefObject } from 'react'
import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'
import gsap from 'gsap'
import { ThemeTypes } from '../../styles/theme/ThemeTypes'

export interface ButtonProps extends ComponentProps<'button'> {
  label?: string,
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  shape?: 'round' | 'square' | 'semi-round', 
  variant?: 'outlined' | 'filled' | 'text',
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

interface ButtonComponentProps extends ButtonProps {
  theme: ThemeTypes,
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  shape?: 'round' | 'square' | 'semi-round', 
}

interface ButtonRippleProps {
  diameter: number,
  theme: ThemeTypes,
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
}

const ButtonBase = styled.button<ButtonComponentProps>(props => ({
  textTransform: 'uppercase',
  border: 'none',
  backgroundColor: 'transparent',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  padding: props.theme.spacing(1.25) + ' ' + props.theme.spacing(2.5),
  borderRadius: (props.shape === 'square') ? '0' : props.theme.spacing((props.shape === 'round') ? 3 : 1.5),
}))

const ButtonWrapper = styled.div({
  position: 'relative',
})

const ButtonRipple = styled.span<ButtonRippleProps>(props => ({
  position: 'absolute',
  borderRadius: '50%',
  transform: 'scale(0)',
  width: `${props.diameter}px`,
  height: `${props.diameter}px`,
  backgroundColor: props.theme.colors[props.color][200] + '55',
}))

const ButtonOutlined = styled(ButtonBase)(props => ({
  color: props.theme.colors.common.text,
  backgroundColor: props.theme.colors[props.color][500] + '00',
  border: '1px solid ' + props.theme.colors[props.color][500],
}))

const ButtonFilled = styled(ButtonBase)(props => ({
  backgroundColor: props.theme.colors[props.color][500],
  color: props.theme.colors.common.white,
  boxShadow: props.theme.shadows.boxShadows[100],
}))

const ButtonText = styled(ButtonBase)(props => ({
  backgroundColor: props.theme.colors[props.color][500] + '00',
  color: props.theme.colors[props.color][500],
}))

const Button = (props: ButtonProps) => {
  const {
    label = '',
    color = 'blue',
    shape = 'square',
    variant = 'text',
    onClick,
    ...other
  } = props
  const theme = useTheme()
  const [diameter, setDiameter] = useState<number>(0)
  const ButtonRef = useRef() as MutableRefObject<HTMLButtonElement>
  const RippleRef = useRef() as MutableRefObject<HTMLSpanElement>

  useEffect(() => {
    if (ButtonRef.current) {
      setDiameter(Math.max(ButtonRef.current.clientWidth, ButtonRef.current.clientHeight))
    }
  },[])

  // === Animations
  const hoverOn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: (variant === 'filled') ? theme.colors[color][600] : theme.colors[color][600] + '22',
      borderColor: (variant !== 'text') ? theme.colors[color][600] : theme.colors[color][600] + '22',
      duration: 0.3,
      ease: 'power1.inOut'
    })
  }

  const hoverOff = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: (variant === 'filled') ? theme.colors[color][500] : theme.colors[color][500] + '00',
      borderColor: (variant === 'text') ? 'transparent' : theme.colors[color][500],
      duration: 0.3,
      ease: 'power1.inOut'
    })
  }

  const clickAnim = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.currentTarget
    const buttonbox = button.getBoundingClientRect()
        
    if (button) {
      gsap.fromTo([RippleRef.current], {
        left: e.clientX - (buttonbox.left + (diameter/2)),
        top: e.clientY - (buttonbox.top + (diameter/2)),
        opacity: 1,
        scale: 0,
      }, {
        scale: 3,
        opacity: 0,
        duration: 0.5,
        ease: 'linear',
        onComplete: onClick,
      })
      gsap.to([RippleRef.current], {
        opacity: 0,
        scale: 0,
        duration: 0,
        delay: 0.8,
      })
    }
  }

  // === Main Function
  if (variant === 'text') {
    return (
      <ButtonWrapper>
        <ButtonText
          color={color}
          theme={theme}
          shape={shape}
          ref={ButtonRef}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          onClick={clickAnim}
          {...other}
        >
          {label}
          <ButtonRipple
            ref={RippleRef}
            diameter={diameter}
            theme={theme}
            color={color}
          />
        </ButtonText>
      </ButtonWrapper>
    )
  }
  
  if (variant === 'filled') {
    return (
      <ButtonWrapper>
        <ButtonFilled
          color={color}
          theme={theme}
          shape={shape}
          ref={ButtonRef}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          onClick={clickAnim}
          {...other}
        >
          {label}
          <ButtonRipple
            ref={RippleRef}
            diameter={diameter}
            theme={theme}
            color={color}
          />
        </ButtonFilled>
      </ButtonWrapper>
    )
  }
  
  if (variant === 'outlined') {
    return (
      <ButtonWrapper>
        <ButtonOutlined
          color={color}
          theme={theme}
          shape={shape}
          ref={ButtonRef}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          onClick={clickAnim}
          {...other}
        >
          {label}
          <ButtonRipple
            ref={RippleRef}
            diameter={diameter}
            theme={theme}
            color={color}
          />
        </ButtonOutlined>
      </ButtonWrapper>
    )
  }
  
}

export default Button