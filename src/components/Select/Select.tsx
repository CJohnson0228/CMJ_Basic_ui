import styled from '@emotion/styled';
import { Children, ComponentProps, ReactElement, cloneElement } from 'react';
import { useTheme } from '../../styles/ThemeProvider';
import { OptionProps } from '../Option/Option';

// === Typecasting
export interface SelectProps extends ComponentProps<'select'> {
  placeHolder: string;
  isMulti: boolean;
  isSearchable: boolean;
  onChange: () => void;
}

// === styled components
const SelectWrapper = styled.div({
  minWidth: '350px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    right: '8px',
    pointerEvents: 'none',
    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',
    borderBottom: '3px solid #000',
    top: '40%',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '8px',
    pointerEvents: 'none',
    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',
    borderTop: '3px solid #000',
    top: '55%',
  },
});

const CustomSelect = styled.select({
  appearance: 'none',
  width: '100%',
  fontSize: '14px',
  padding: '6px 48px 6px 8px',
  backgroundColor: '#fff',
  border: '1px solid #caced1',
  borderRadius: '2px',
  color: '#000',
  cursor: 'pointer',
});

// === main function
const Select = (props: SelectProps) => {
  const {
    placeHolder,
    isMulti = false,
    isSearchable = false,
    onChange,
    children,
    ...other
  } = props;
  const theme = useTheme();

  const renderChildren = () => {
    return Children.map(children, (child) => {
      if (child) {
        return cloneElement(child as ReactElement<OptionProps>, {});
      }
    });
  };

  return (
    <SelectWrapper>
      <CustomSelect>{renderChildren()}</CustomSelect>
    </SelectWrapper>
  );
};

export default Select;
