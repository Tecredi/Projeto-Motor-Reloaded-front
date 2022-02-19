import styled from 'styled-components';

export const HeaderStyled = styled.div<any>`
  width: 100%;
  background-color: ${({theme, dark}) => dark ? theme.primaryColor : theme.primaryColorLight};
  border-radius: 0px 0px 30px 30px;
  padding: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  position: relative;
  flex: 1;
  height: auto;
`;

export const Container = styled.div<any>`
  width: 100%;
  max-width: ${props => props.maxWidth ?? `300px`};
  margin: auto;
  text-align: center;

  p {
    font-size: 26px;
    line-height: 26px;
    font-family: Roboto Slab, sans-serif;
    color: ${(props) => props.theme.primaryColor};
    font-weight: 200;
    margin: 0;
  }

  span {
    line-height: 1.2;
  }
`;

export const CenteredVertical = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  width: 100%;
`;

export const SubHeader = styled.div<any>`
  background-color: ${({theme, dark}) => dark ? theme.primaryColor : theme.primaryColorLight};
  border-radius: 0px 0px 30px 30px;
  padding-top: 30px;
  margin-top: -40px;
  position: relative;
  z-index: 2;
  height: 90px;
  text-align: center;

  p {
    font-family: Roboto, sans-serif;
    font-size: 22px;
    letter-spacing: 0.75px;
    color: #fff;
    text-align: center;
  }
`;
