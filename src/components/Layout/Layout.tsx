import React from 'react';
import styled from 'styled-components';
import GodMode from '../../godmode/GodMode';

const LayoutStyled = styled.div`
  min-height: 100vh;
`;

const Layout = ({ children, godMode = false }) => {
  return (
    <LayoutStyled>
      {godMode === true && <GodMode />}
      {children}
    </LayoutStyled>
  );
};

export default Layout;
