import React from 'react';
import styled from 'styled-components';
import { HeaderStyled } from './Header.styles';



const Header = ({children}) => (
    <HeaderStyled>
        {children}
    </HeaderStyled>
)

export default Header