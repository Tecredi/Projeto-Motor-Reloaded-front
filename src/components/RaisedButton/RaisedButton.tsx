import React from 'react';
import { ButtonStyled } from './RaisedButton.styles';

type Props = {
  icon?: any;
  text: any;
  dark?: string;
  onClick?: () => any;
  className?: any;
  htmlType?: any;
};

const RaisedButton = ({ icon, text, dark, ...rest }: Props) => {
  return (
    <ButtonStyled dark={dark} {...rest} >
      {icon && <span className="icon">{icon}</span>}
      <span>{text}</span>
    </ButtonStyled>
  );
};

export default RaisedButton;
