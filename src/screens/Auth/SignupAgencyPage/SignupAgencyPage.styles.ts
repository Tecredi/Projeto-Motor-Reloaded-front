import styled from 'styled-components';

export const Canvas = styled.div`
  background-color: ${(props) => props.theme.primaryColorLight};
  height: 100vh;
`;

export const RoundedTitle = styled.div`
  color: #ffffff;
  text-align: center;
  border-radius: 22pt;
  padding: 10px 25px;
  background-color: ${(props) => props.theme.primaryColor};
  margin: 30px;
  font-size: 17;
  font-family: Roboto Slab, sans-serif;
`;

export const FormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
`;

export const Icon = styled.span`
  position: relative;
  right: 10px;
  top: 10px;
  font-size: 40px;
  color: #609BFF;
`;
