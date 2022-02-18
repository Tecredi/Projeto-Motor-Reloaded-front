import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GoCheck } from 'react-icons/go';
import { useTheme } from 'styled-components';
import { ThemeInterface } from '../../themes/tecredi-blue';

const Square = styled.div<any>`
  width: 28px;
  height: 28px;
  border: 3px solid;
  border-color: ${({ color }) => color};
  border-radius: 5px;
  justify-self: start;
  align-items: center;
  justify-content: center;
  display: flex;
  &.checked {
    background: ${({ color }) => color};
    color: ${({ colorChecked }) => colorChecked};
    font-size: 24px;
  }
`;

const Label = styled.label<any>`
  display: flex;
  align-items: center;
  font-size: ${({ font }) => (font ? '15px' : '16px')};
  color: ${({ color }) => color};
  font-weight: bold;
  line-height: 19px;
`;

type Props = {
  text: any;
  color?: string;
  colorChecked?: string;
  value?: boolean;
  onChange: (event?) => void;
  className?: any;
};

const Checkbox = ({ text, color, colorChecked, value = false, ...rest }: Props) => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme() as ThemeInterface;

  useEffect(() => {
    setChecked(value);
  });

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Label color={color} {...rest}>
      <Square
        color={color || theme.primaryColor}
        colorChecked={colorChecked || `#FFF`}
        className={checked && 'checked'}
      >
        {checked && <GoCheck />}
      </Square>
      <input onChange={handleChange} type="checkbox" style={{ visibility: 'hidden' }} />
      <span>{text}</span>
    </Label>
  );
};

export default Checkbox;
