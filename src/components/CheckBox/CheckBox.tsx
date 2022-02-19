import React, { useState, useEffect } from 'react';
import { GoCheck } from 'react-icons/go';
import { useTheme } from 'styled-components';
import { ThemeInterface } from '../../themes/tecredi-blue';
import { Label, Square } from './CheckBox.styles';

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
