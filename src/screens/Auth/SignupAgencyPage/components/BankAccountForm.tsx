import React, { useState } from 'react';
import styled from 'styled-components';
import RaisedButton from '../../../../components/RaisedButton/RaisedButton';

const Container = styled.div`
  width: 330px;
  margin: 0 auto;
  margin-top: 50px;
`;

const BankAccountForm = ({handleSubmit, ...rest}: any) => {

  return (
    <Container {...rest}>
        Bank account form

        <RaisedButton onClick={() => handleSubmit({})} dark={'true'} text={'Avançar'} htmlType="submit" />
    </Container>
  );
};

export default BankAccountForm;
