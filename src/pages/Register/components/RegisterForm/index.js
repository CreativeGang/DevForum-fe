import React from 'react';
import {
  RegisterContent,
  SignUpLogoWrapper,
  LogoContainer,
  LogoIcon,
  LogoLink,
  Intro,
  IntroTitle,
  IntroContent,
  SignUpFrom,
  SignUpSection,
  SignUpLabel,
  SignUpInput,
  SingUpTwoColumnSection,
  Column,
  PasswordWrapper,
  PasswordStrongHint,
  CheckBoxWrapper,
  CheckBoxContainer,
  SwitchableCheckBoxContainer,
  CheckBoxLabel,
  CheckBoxInput,
  CheckIcon,
  CheckText,
  SignUpButton,
} from './RegisterFormElements';

const RegisterForm = () => {
  return (
    <RegisterContent>
      <SignUpLogoWrapper>
        <LogoContainer>
          <LogoIcon />
          <LogoLink to="/">DevForum</LogoLink>
        </LogoContainer>
      </SignUpLogoWrapper>
      <Intro>
        <IntroTitle>Create a new Devfroum Account</IntroTitle>
        <IntroContent>
          Signing up a account to post, reply and answer !
        </IntroContent>
      </Intro>
      <SignUpFrom>
        <SignUpSection>
          <SignUpLabel>Username</SignUpLabel>
          <SignUpInput placeholder="Please Enter Your User Name"></SignUpInput>
        </SignUpSection>
        <SingUpTwoColumnSection>
          <Column>
            <SignUpSection>
              <SignUpLabel>First Name</SignUpLabel>
              <SignUpInput placeholder="Please Enter Your First Name"></SignUpInput>
            </SignUpSection>
          </Column>
          <Column>
            <SignUpSection>
              <SignUpLabel>Last Name</SignUpLabel>
              <SignUpInput placeholder="Please Enter Your Last Name"></SignUpInput>
            </SignUpSection>
          </Column>
        </SingUpTwoColumnSection>
        <SignUpSection>
          <SignUpLabel>Email</SignUpLabel>
          <SignUpInput placeholder="Please Enter Your Email"></SignUpInput>
        </SignUpSection>
        <SignUpSection>
          <SignUpLabel>Password</SignUpLabel>
          <PasswordWrapper>
            <SignUpInput
              type="password"
              placeholder="Please Enter Your Password"
            ></SignUpInput>
            <PasswordStrongHint>Strong</PasswordStrongHint>
          </PasswordWrapper>
        </SignUpSection>
        <CheckBoxWrapper>
          <SingUpTwoColumnSection>
            <Column>
              <CheckBoxContainer>
                <CheckBoxInput type="checkbox" />
                <CheckIcon />
                <CheckBoxLabel />
                <CheckText>I agree to the Terms & Conditions.</CheckText>
              </CheckBoxContainer>
            </Column>
            <Column>
              <SwitchableCheckBoxContainer>
                <CheckBoxInput type="checkbox" />
                <CheckIcon />
                <CheckBoxLabel />
                <CheckText>Subscribe to newsletter</CheckText>
              </SwitchableCheckBoxContainer>
            </Column>
          </SingUpTwoColumnSection>
        </CheckBoxWrapper>
        <SignUpButton to="/register">Create New Account</SignUpButton>
      </SignUpFrom>
    </RegisterContent>
  );
};

export default RegisterForm;
