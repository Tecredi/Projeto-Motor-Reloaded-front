import React, { useEffect, useState } from 'react';
import { AiOutlineDollarCircle, AiOutlineUser, AiOutlineFileText } from 'react-icons/ai';
import Header from '../../../components/Header/Header';
import { CenteredVertical, Container, SubHeader } from '../../../components/Header/Header.styles';
import LogoContainer from '../../../components/Header/LogoContainer';
import BankAccountForm from './components/BankAccountForm';
import DocumentsForm from './components/DocumentsForm';
import SignupAgencyForm from './components/SignupAgencyForm';
import { Icon } from './SignupAgencyPage.styles';

const SignupAgencyPage = () => {
  const [stage, setStage] = useState<number>(1);
  const [formData, setFormData] = useState({});
  const [PageComponent, setPageComponent] = useState(<></>);

  const [icon, setIcon] = useState(<></>);
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (stage) {
      case 1:
        setIcon(<AiOutlineUser />);
        setTitle('Preencha seus dados');
        setPageComponent(<SignupAgencyForm handleSubmit={handleSubmit} />);
        break;
      case 2:
        setIcon(<AiOutlineDollarCircle />);
        setTitle('Dados Bancários');
        setPageComponent(<BankAccountForm handleSubmit={handleSubmit} />);
        break;
      case 3:
        setIcon(<AiOutlineFileText />);
        setTitle('Documentos');
        setPageComponent(<DocumentsForm handleSubmit={handleSubmit} />);
        break;
      default:
        setStage(1);
    }
  }, [stage]);

  const handleSubmit = (values: any) => {
    setFormData({ ...formData, ...values });
    setStage(stage + 1);
  };


  return (
    <>
      <Header dark={true} className={''}>
        <LogoContainer />
      </Header>
      <SubHeader dark={false}>
        <div className="mt-1 relative">
          <CenteredVertical>
            <Icon>{icon}</Icon>
            <span className="white slab font-22 relative">{title}</span>
          </CenteredVertical>
        </div>
      </SubHeader>
      {PageComponent}
    </>
  );
};

export default SignupAgencyPage;
