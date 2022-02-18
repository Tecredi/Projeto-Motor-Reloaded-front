import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header/Header';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';




const LoginPage = ({small, dark = false, ...rest}) => {
  const router = useRouter();
  const { loginType } = router.query;

  return (
    <>
      <LoginHeader></LoginHeader>
      <LoginForm loginType={loginType as any}></LoginForm>
    </>
  );
};

export default LoginPage;
