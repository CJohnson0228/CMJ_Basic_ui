import { useState, ComponentProps } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'

export interface CheckboxProps extends ComponentProps<'label'> {
  label?: string,
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
}

const Checkbox = (props: CheckboxProps) => {
  const { label, color = 'blue', ...other } = props
  const theme = useTheme()
  const [ checked, setChecked ] = useState<boolean>(false)
  
  const CheckboxLabel = styled.label({
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

  const CheckboxInput = styled.input({
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
  })

  const CheckboxCheckmark = styled.span({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '18px',
    width: '18px',
    border: '2px solid ' + theme.colors[color][500],
    borderRadius: theme.spacing(0.5),
    backgroundColor: checked ? theme.colors[color][500] : theme.colors[color][800],
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: theme.colors[color][500] + '77',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      display: checked ? 'block' : 'none',
      left: '4px',
      top: '0px',
      width: '6px',
      height: '12px',
      border: 'solid ' + theme.colors.contrastText(theme.colors[color][600]),
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
    }
  })

  const toggleChecked = () => setChecked(!checked)
  
  return (
    <CheckboxLabel onClick={toggleChecked} {...other}>
      {label}
      <CheckboxInput />
      <CheckboxCheckmark></CheckboxCheckmark>
    </CheckboxLabel>
  )
}

export default Checkbox