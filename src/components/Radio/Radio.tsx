import { useState, ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'

export interface RadioProps extends ComponentProps<'label'> {
  label?: string,
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  isChecked?: boolean
}


const Radio = (props: RadioProps) => {
  const { label, color = 'blue', isChecked = false, ...other } = props
  const theme = useTheme()
  const [ checked, setChecked ] = useState<boolean>(isChecked)
  
  const toggleChecked = () => setChecked(!checked)
    
  const RadioLabel = styled.label({
    display: 'block',
    position: 'relative',
    paddingLeft: theme.spacing(3.25),
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
    fontSize: theme.spacing(2),
    userSelect: 'none',
    textTransform: 'capitalize',
    color: theme.colors.common.text,
  })

  const RadioInput = styled.input({
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
  })

  const RadioDot = styled.span({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '18px',
    width: '18px',
    border: '2px solid ' + theme.colors[color][500],
    borderRadius: theme.spacing(2),
    backgroundColor: checked ? theme.colors[color][500] : theme.colors[color][800],
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: theme.colors[color][500] + '77',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      display: checked ? 'block' : 'none',
      left: '0px',
      top: '0px',
      width: '14px',
      height: '14px',
      border: 'solid ' + theme.colors.common.black,
      borderWidth: '3px',
      borderRadius: '8px',
      backgroundColor: theme.colors[color][100],
    }
  })
  
  return (
    <RadioLabel theme={theme} onClick={toggleChecked} {...other}>
      {label}
      <RadioInput />
      <RadioDot></RadioDot>
    </RadioLabel>
  )
}

export default Radio