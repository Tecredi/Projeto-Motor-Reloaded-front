import React from 'react';
import Header from '../../../../components/Header/Header';
import {
  Container,
  SubHeader,
  CenteredVertical,
} from '../../../../components/Header/Header.styles';

const LoginHeader = () => {
  return (
    <>
      <Header>
        <Container>
          <img src="/assets/Images/logo_white.png/" />
          <p>crédito inteligente</p>
        </Container>
      </Header>
      <SubHeader>
        <CenteredVertical>
          <p>Acesse a plataforma</p>
        </CenteredVertical>
      </SubHeader>
    </>
  );
};

export default LoginHeader;
