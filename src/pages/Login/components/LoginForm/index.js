import React from 'react';
import {
  LoginContent,
  LoginLogoWrapper,
  LogoContainer,
  LogoIcon,
  LogoLink,
  Intro,
  IntroTitle,
  IntroContent,
  LoginFrom,
  LoginSection,
  LoginLabel,
  LoginInput,
  PasswordWrapper,
  LoginButton,
} from './LoginFormElements';

const LoginForm = () => {
  return (
    <LoginContent>
      <LoginLogoWrapper>
        <LogoContainer>
          <LogoIcon />
          <LogoLink to="/">DevForum</LogoLink>
        </LogoContainer>
      </LoginLogoWrapper>
      <Intro>
        <IntroTitle>Login to writer and answer</IntroTitle>
        <IntroContent>Find the answer of your promble quickly!</IntroContent>
      </Intro>
      <LoginFrom>
        <LoginSection>
          <LoginLabel>Username</LoginLabel>
          <LoginInput placeholder="Please Enter Your User Name"></LoginInput>
        </LoginSection>
        <LoginSection>
          <LoginLabel>Password</LoginLabel>
          <PasswordWrapper>
            <LoginInput
              type="password"
              placeholder="Please Enter Your Password"
            ></LoginInput>
          </PasswordWrapper>
        </LoginSection>
        <LoginButton to="/register">Login</LoginButton>
      </LoginFrom>
    </LoginContent>
  );
};

export default LoginForm;
