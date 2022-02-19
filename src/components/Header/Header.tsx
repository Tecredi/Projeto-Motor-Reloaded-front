import React from 'react';
import styled from 'styled-components';
import { HeaderStyled } from './Header.styles';



const Header = ({children, dark = false, ...rest}) => (
    <HeaderStyled dark={dark} {...rest}>
        {children}
    </HeaderStyled>
)

export default Header