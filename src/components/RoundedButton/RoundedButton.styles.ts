import styled from 'styled-components';

export const StyledButton = styled.button<any>`
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

export const IconPlace = styled.span`
  position: absolute;
  left: 15px;
`;
