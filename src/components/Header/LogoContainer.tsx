import React from 'react';
import { Container } from '../Header/Header.styles';
import Logo from '../Logo/Logo';

const LogoContainer = ({children = null, ...rest} ) => {

    return (
       <Container {...rest}>
          <Logo />
          {children}
        </Container>
        )
}

export default LogoContainer