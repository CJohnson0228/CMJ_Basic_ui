import { useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'

export interface RangeProps {
  label: string,
  min?: string,
  max?: string,
  defaultValue?: string,
  color?: 'red'|'orange'|'yellow'|'green'|'blue'|'violet'|'purple'|'pink'|'grey'
}

interface SliderProps {
  inputColor?: string
}

const RangeWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
})

const RangeLabel = styled.div({
  marginBottom: '8px',
})

const RangeContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '16px',
})

const RangeValue = styled.div({
  fontSize: '16px',
  marginLeft: '12px',
  width: '50px',
})  

const RangeSlider = styled.input<SliderProps>(props => ({
  appearance: 'none',
  width: '100%',
  height: '6px',
  cursor: 'pointer',
  outline: 'none',
  borderRadius: '16px',
  '&::-webkit-slider-thumb': {
    backgroundColor: props.inputColor,
    appearance: 'none',
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    border: 'none',
  },
}))
  
const Range = (props: RangeProps) => {
  const {
    label,
    min = '0',
    max = '100',
    color,
    defaultValue = '0',
    ...other
  } = props
  const theme = useTheme()
  const [ value, setValue ] = useState<string>(defaultValue)
  
  return (
    <RangeWrapper>
      <RangeLabel style={{ color: theme.colors.common.text }}>{label}</RangeLabel>
      <RangeContainer>
        <RangeSlider
          onChange={(e) => setValue(e.currentTarget.value)}
          type='range'
          min={min}
          max={max}
          value={value}
          style={{
            background: theme.colors.common.text,
          }}
          inputColor={color ? theme.colors[color][500] : theme.colors.blue[500]}
          {...other}
        />
        <RangeValue style={{ color: theme.colors.common.text }}>{value}</RangeValue>
      </RangeContainer>
    </RangeWrapper>
    
  )
}

export default Range