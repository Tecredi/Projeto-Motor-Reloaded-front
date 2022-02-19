import React from 'react';
import Input from './Input';


const MASK = '11111-111'

const InputCEP = (props) => {

  return (
    <Input
      mask={MASK}
      {...props}
    />
  );
};

export default InputCEP;
