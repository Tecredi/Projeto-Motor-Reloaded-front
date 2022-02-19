import React, { useState } from 'react';
import { Form as FormAnt, Input, Select } from 'antd';
import styled from 'styled-components';
import { usePartnerTypesQuery } from '../../../../hooks/query/usePartnerTypesQuery';
import FloatLabel from '../../../../components/FloatLabel/FloatLabel';
import { useForm } from 'antd/lib/form/Form';
import RaisedButton from '../../../../components/RaisedButton/RaisedButton';
import { useRegimeQuery } from '../../../../hooks/query/useRegimeQuery';
import InputDocument from '../../../../components/Input/InputDocument';
import useDocumentValidator from '../../../../hooks/ant/useDocumentValidator';
import InputPhone from '../../../../components/Input/InputPhone';
import { useFormBuilder, FormData } from '../../../../hooks/ant/useFormBuilder';

const { Option } = Select;

const Container = styled.div`
  width: 330px;
  margin: 0 auto;
  margin-top: 50px;

  //barra de rolagem:
  max-height: 70vh;
  overflow: hidden auto;
  padding-right: 1rem;
`;

const FormItem = FormAnt.Item;

const SignupAgencyForm = ({ handleSubmit, ...rest }: any) => {
  const { data: partnerTypes } = usePartnerTypesQuery();
  const { data: regimeData } = useRegimeQuery();
  const [update, setUpdate] = useState(0);
  const cnpjRule = useDocumentValidator('cnpj');

  const [form] = useForm();

  const formData: FormData = [
    {
      name: 'partnerType',
      label: 'Tipo de Parceiro',
      inputType: 'select',
      options: partnerTypes,
    },
    {
      name: 'regime',
      label: 'Regime Tributário',
      inputType: 'select',
      options: regimeData,
    },
    {
      name: 'cnpj',
      label: 'CNPJ',
      inputType: 'custom',
      component: <InputDocument type={'cnpj'} />,
      rules: [cnpjRule],
    },
    {
      name: 'razaoSocial',
      label: 'Razão Social',
    },
    {
      name: 'tradingName',
      label: 'Nome Fantasia',
    },
    {
      name: 'stateRegistration',
      label: 'Inscrição Estadual',
      required: false,
    },
    {
      name: 'landline',
      label: 'Telefone Fixo',
      inputType: 'custom',
      component: <InputPhone type={'landline'} />,
    },
    {
      name: 'phone',
      label: 'Celular',
      inputType: 'custom',
      component: <InputPhone />,
    },
    {
      name: 'state',
      label: 'Estado',
    },
    {
      name: 'city',
      label: 'Cidade',
    },
    {
      name: 'address',
      label: 'Endereço',
    },
    {
      name: 'addressNumber',
      label: 'Número',
      className: 'inline-half-left',
    },
    {
      name: 'addressComplement',
      label: 'Complemento',
      className: 'inline-half-right',
    },
    {
      name: 'addressDistrict',
      label: 'Bairro',
    },
  ];

  const onSubmit = (values) => {
      handleSubmit(values)
  };

  const formRenderer = useFormBuilder(formData, form);

  return (
    <Container {...rest}>
      <FormAnt
        validateTrigger="onSubmit"
        onFinish={onSubmit}
        form={form}
        onValuesChange={() => setUpdate(update + 1)}
      >
        {formRenderer()}
        <FormItem>
          <RaisedButton dark={'true'} text={'Avançar'} htmlType="submit" />
        </FormItem>
      </FormAnt>
    </Container>
  );
};

export default SignupAgencyForm;
