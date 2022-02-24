import React from 'react';
import { RegisterPage, RegisterWrapper, RegisterBgm } from './style';
import RegisterForm from './components/RegisterForm';
import signUpImg from '../../static/images/signup_bgm.png';
import RegisterNavbar from './components/RegisterHeader/';
import RegisterLoginFooter from '../../common/layout/RegisterLoginFooter';
const Register = () => {
  return (
    <RegisterPage>
      <RegisterNavbar />
      <RegisterWrapper>
        <RegisterBgm src={signUpImg} alt="RegisterImg"></RegisterBgm>
        <RegisterForm />
      </RegisterWrapper>
      <RegisterLoginFooter />
    </RegisterPage>
  );
};

export default Register;
