import React, { useState } from 'react';
import Checkbox from '../../../../components/CheckBox/CheckBox';
import InputDocument from '../../../../components/Input/InputDocument';
import RaisedButton from '../../../../components/RaisedButton/RaisedButton';
import { FormContainer } from '../LoginPage.styles';
import { Form } from 'antd';
import useDocumentValidator from '../../../../hooks/ant/useDocumentValidator';
import { useForm } from 'antd/lib/form/Form';
import LoginCheckbox from './LoginCheckbox';

type Props = {
  loginType: 'agencia' | 'tomador';
};

const LoginForm = ({ loginType }: Props) => {
  const cpfRule = useDocumentValidator('both');
  const cnpjRule = useDocumentValidator('cnpj');

  const [form] = Form.useForm();
  const initialValues = {
    termos: false,
    politica: false,
    credito: false,
    document: '',
  };
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <FormContainer>
      <Form name="loginForm" form={form} onFinish={onFinish} initialValues={initialValues}>
        <h2 className="unbold text-center">Insira seu {loginType === 'tomador' && 'CPF /'} CNPJ</h2>
        <Form.Item
          validateTrigger={['onBlur', 'onSubmit']}
          validateFirst={true}
          name="document"
          rules={[
            { required: true, message: 'Campo necessário', validateTrigger: 'onSubmit' },
            loginType === 'tomador' ? cpfRule : cnpjRule,
          ]}
        >
          <InputDocument type={loginType === 'agencia' ? 'cnpj' : 'both'} className="mb-3" />
        </Form.Item>

        <LoginCheckbox
          name="termos"
          form={form}
          errorMessage="Necessário aceitar os termos de uso"
          text={<>Aceito os {<span className="link">Termos de uso</span>}</>}
          key={1}
        />

        <LoginCheckbox
          name="politica"
          form={form}
          errorMessage="Necessário aceitar a política de privacidade"
          text={<>Aceito a {<span className="link">Política de privacidade</span>}</>}
          key={2}
        />

        <LoginCheckbox
          name="credito"
          form={form}
          errorMessage="Necessário aceitar a consulta de crédito"
          text={<>Aceito a {<span className="link">Consulta de crédito</span>}</>}
          key={3}
        />

        <RaisedButton text={'Avançar'} dark={`true`} htmlType="submit" />
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
