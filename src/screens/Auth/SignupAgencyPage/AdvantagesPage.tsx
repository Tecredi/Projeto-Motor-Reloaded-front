import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header/Header';
import { Container } from '../../../components/Header/Header.styles';
import { Canvas, RoundedTitle } from './SignupAgencyPage.styles';
import useTheme from '../../../hooks/useTheme';
import { AiOutlineClockCircle, AiOutlineDollarCircle, AiOutlineFileText, AiOutlinePhone, AiOutlineUser, AiOutlineWhatsApp } from "react-icons/ai";
import AdvantageItem from './components/AdvantageItem';
import { FaRegNewspaper } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import RaisedButton from '../../../components/RaisedButton/RaisedButton';
import LogoContainer from '../../../components/Header/LogoContainer';

const advantages = [
  {
    id: 1,
    icon: <AiOutlineDollarCircle />,
    content: <span>Você recebe à vista e nós cuidamos do parcelamento</span>
  },
  {
    id: 2,
    icon: <AiOutlineClockCircle />,
    content: <span>Venda seus carros em menos de 10 minutos</span>
  },
  {
    id: 3,
    icon: <FaRegNewspaper />,
    content: <span>Zero preenchimento de papelada. Tudo pelo app!</span>
  },
  {
    id: 4,
    icon: <BiRocket />,
    content: <span>Aumente suas vendas e lucros de forma segura</span>
  },
]


const SignupAgencyPage = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Canvas>
      <Header dark={true}>
        <LogoContainer />
      </Header>
      <Container className={'mt-5'} maxWidth={'318px'}>
        <span className={' font-20 white slab'}>
          Chegou a hora de{' '}
          <span className={'bold'}>
            modernizar a <br /> sua loja
          </span>
          . Seja um parceiro Tecredi
        </span>
        <RoundedTitle>Principais vantagens:</RoundedTitle>
        {advantages.map(item => (
          <AdvantageItem key={item.id} icon={item.icon} content={item.content} />
        ))}

        <RaisedButton className={'mt-5'} text={'Me cadastrar agora'} dark={'true'}></RaisedButton>
      </Container>
    </Canvas>
  );
};

export default SignupAgencyPage;
