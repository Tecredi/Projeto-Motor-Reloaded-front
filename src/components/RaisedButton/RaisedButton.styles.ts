import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)<any>`
  width: ${({ small, autosize }) => {
    if (small) return '150px';
    else if (autosize) return '100%';
    else return '300px';
  }};
  height: 50px;
  margin: ${({ center }) => (center ? 'auto' : '0px 0px')};
  text-align: left;
  outline: none;
  border-radius: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: ${({ smallText }) => (smallText ? '18px' : '21px')};
  border: 0px;
  border-bottom: 8px solid
    ${({ dark, disabled }) => {
      if (disabled) return '#989898';
      else if (dark) return '#609BFF';
      else return '#0058ee';
    }};
  color: white;
  background-color: ${({ dark, disabled, theme }) => {
    if (disabled) return '#b8b8b8';
    else if (dark) return theme.primaryColor;
    else return '#3e86ff';
  }};
  letter-spacing: 0.71px;
  line-height: 22px;
  transition: 0.1s;
  display: flex;
  align-items: center;
  justify-content: ${({ hasicon }) => (hasicon ? `start` : 'center')};
  cursor: pointer;

  .icon {
    font-size: 30px;
    margin-right: ${({ onlyIcon }) => (onlyIcon ? '' : '10px')};
    justify-self: end;
  }

  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    border-color: #0058ee;
    border-bottom: 0px;
  }
`;

