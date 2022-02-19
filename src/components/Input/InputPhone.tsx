import React from 'react';
import Input from './Input';

type Props = {
  type?: 'cell' | 'landline';
  onChange?: (event) => any;
  className?: string;
};

const LANDLINE_MASK = '(11) 1111-1111'
const PHONE_MASK = '(11) 11111-1111'

const InputPhone = ({ type, ...rest }: Props | any) => {

  return (
    <Input
      placeholder={''}
      mask={type === 'landline' ? LANDLINE_MASK : PHONE_MASK}
      {...rest}
    />
  );
};

export default InputPhone;
