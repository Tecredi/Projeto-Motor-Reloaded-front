import React from 'react';
import styled from 'styled-components';

const StyledFrame = styled.div`
  min-height: 100vh;
  
`;

const MainFrame = ({ children }) => <StyledFrame>{children}</StyledFrame>;

export default MainFrame;
