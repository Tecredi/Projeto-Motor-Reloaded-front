import React, { useEffect, useState } from 'react';
import { clearNonNumber } from '../../utils/strings';
import Input from './Input';

type Props = {
  type: 'cpf' | 'cnpj' | 'both';
  onChange?: (event) => any;
  className?: string;
};

const CNPJ_MASK = '11.111.111/1111-11';
const CPF_MASK = '111.111.111-11';

const InputDocument = ({ type, onChange, ...rest }: Props | any) => {
  const [isCnpjLength, setIsCnpjLength] = useState(true);
  const [mask, setMask] = useState(CNPJ_MASK);

  useEffect(() => {
    if (type === 'both') {
      setMask(isCnpjLength ? CNPJ_MASK : CPF_MASK);
    }
  }, [isCnpjLength]);

  const evaluateLength = (text: string) => {
    setIsCnpjLength(!!(clearNonNumber(text).length >= 11));
  };


  return (
    <Input
      placeholder={''}
      onChange={(event) => {
        if (onChange) {
          onChange(event);
        }
        evaluateLength(event.target.value);
      }}
      mask={mask}
      maxLength={18}
      {...rest}
    />
  );
};

export default InputDocument;
