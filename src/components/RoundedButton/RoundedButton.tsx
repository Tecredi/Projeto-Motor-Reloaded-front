import styled from 'styled-components';

const StyledButton = styled.button`
  width: 230px;
  height: 37px;
  border-radius: 22px;
  border: 0px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 0px 16px 0px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
  color: ${(props) => props.textColor ?? '#000'};
  background-color: ${(props) => props.backgroundColor ?? '#fff'};
  outline: none;
  margin: 0 auto;
  cursor: pointer;
`;

const IconPlace = styled.span`
  position: absolute;
  left: 15px;
`;

type Props = {
  onClick: any;
  textColor?: string;
  backgroundColor?: string;
  icon?: any;
  children: any;
  className?: any
};

const RoundedButton = ({ textColor, backgroundColor, icon, onClick, children }: Props) => (
  <StyledButton onClick={onClick} textColor={textColor} backgroundColor={backgroundColor}>
    {icon ? <IconPlace>{icon}</IconPlace> : ''} {children}
  </StyledButton>
);

export default RoundedButton;
