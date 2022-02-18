import React from 'react';
import styled from 'styled-components';
import MaskedInput from 'antd-mask-input'

const InputStyled = styled(MaskedInput )`
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 13px;
  height: 68px;
  width: 100%;
  text-align: center;
  font-size: 29px;
  line-height: 30px;
  outline: currentcolor none medium;
  color: rgb(49, 49, 49);
`;

const Input = (props: any) => {
  return <InputStyled {...props} />;
};

export default Input;
