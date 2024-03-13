import { Children, cloneElement, Dispatch, ReactElement, ReactNode, SetStateAction, useState } from 'react'
import { ComponentProps } from 'react'
import styled from '@emotion/styled'
import { RadioProps } from '../Radio/Radio'

export interface RadioGroupProps extends ComponentProps<'div'> {
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  vertical?: boolean
}


const renderChildren = (
  children: ReactNode | ReactNode[],
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey',
  selected: number | null,
  setSelected: Dispatch<SetStateAction<number | null>>
) => {
  return Children.map(children, (child, id) => {

    if (child) {
      return cloneElement(child as ReactElement<RadioProps>, {
        color: color,
        onClick: () => setSelected(id),
        isChecked: (id === selected) ? true : false,
        style: {
          margin: '5px',
        }
      })
    }
  })
}

const RadioGroup = (props: RadioGroupProps) => {
  const { color = 'blue', vertical = true, children, ...other } = props
  const [ selected, setSelected ] = useState<number|null>(null)


  const RadioGroupBase = styled.div({
    position: 'relative',
    display: 'flex',
    flexDirection: vertical ? 'column' : 'row',
  })

  return (
    <RadioGroupBase {...other}>
      {renderChildren(children, color, selected, setSelected)}
    </RadioGroupBase>
  )
}

export default RadioGroup