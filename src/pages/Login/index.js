import React from 'react';
import { LoginPage, LoginWrapper, LoginBgm } from './style';
import LoginForm from './components/LoginForm';
import LoginImg from '../../static/images/signup_bgm.png';
import Navbar from '../../common/layout/Navbar';
import RegisterLoginFooter from '../../common/layout/RegisterLoginFooter';

const Login = () => {
  return (
    <LoginPage>
      <Navbar />
      <LoginWrapper>
        <LoginBgm src={LoginImg} alt="LoginImg"></LoginBgm>
        <LoginForm />
      </LoginWrapper>
      <RegisterLoginFooter />
    </LoginPage>
  );
};

export default Login;
