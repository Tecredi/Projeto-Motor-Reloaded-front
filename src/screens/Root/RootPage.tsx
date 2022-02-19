import React from 'react';
import { useRouter } from 'next/router';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineLock } from 'react-icons/ai';
import styled from 'styled-components';
import RaisedButton from '../../components/RaisedButton/RaisedButton';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { useTheme } from 'styled-components';
import { ThemeInterface } from '../../themes/tecredi-blue';
import Logo from '../../components/Logo/Logo';

const Outer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  height: 100vh;
  
`

const Container = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: 20vh;
`;

const LogoContainer = styled.div`
  padding-top: 3rem;
`;


const Text = styled.h2`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 26px;
  line-height: 26px;
  color: rgb(96, 155, 255);
  font-weight: 300;
  margin-top: 1rem;
`;

const RootPage = () => {
  const router = useRouter();
  const theme = useTheme() as ThemeInterface;

  return (
    <Outer>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Text>crédito inteligente</Text>
        <RaisedButton
          onClick={() => router.push('/auth/login/agencia')}
          className="mt-5 mb-5"
          icon={null}
          text={'Simular Crédito'}
        />
        <div className="mt-6">
          <RoundedButton
            icon={<FaWhatsapp />}
            onClick={() => window.open('https://wa.me/555492681920')}
          >
            Suporte por Whatsapp
          </RoundedButton>
          <br />
          <RoundedButton
            textColor="white"
            backgroundColor={theme.primaryColorDark}
            icon={<AiOutlineLock />}
            onClick={() => router.push('/auth/login/agencia')}
          >
            Já sou Cadastrado
          </RoundedButton>
        </div>
      </Container>
    </Outer>
  );
};

export default RootPage;
