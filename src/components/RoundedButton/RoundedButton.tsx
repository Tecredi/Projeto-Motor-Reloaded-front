import React from 'react';
import { StyledButton, IconPlace } from './RoundedButton.styles';

type Props = {
  onClick: any;
  textColor?: string;
  backgroundColor?: string;
  icon?: any;
  children: any;
  className?: any;
};

const RoundedButton = ({ textColor, backgroundColor, icon, onClick, children }: Props) => (
  <StyledButton 
  onClick={onClick} 
  textColor={textColor} 
  backgroundColor={backgroundColor}>
    {icon ? <IconPlace>{icon}</IconPlace> : ''} {children}
  </StyledButton>
);

export default RoundedButton;
