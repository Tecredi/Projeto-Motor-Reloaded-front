import React from 'react';
import Header from '../../../../components/Header/Header';
import {
  SubHeader,
  CenteredVertical,
} from '../../../../components/Header/Header.styles';
import LogoContainer from '../../../../components/Header/LogoContainer';

const LoginHeader = () => {
  return (
    <>
      <Header>
        <LogoContainer>
          <p>crédito inteligente</p>
        </LogoContainer>
      </Header>
      <SubHeader dark={true}>
        <CenteredVertical>
          <p>Acesse a plataforma</p>
        </CenteredVertical>
      </SubHeader>
    </>
  );
};

export default LoginHeader;
