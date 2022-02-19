import styled from 'styled-components';


export const Square = styled.div<any>`
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

export const Label = styled.label<any>`
  display: flex;
  align-items: center;
  font-size: ${({ font }) => (font ? '15px' : '16px')};
  color: ${({ color }) => color};
  font-weight: bold;
  line-height: 19px;
`;