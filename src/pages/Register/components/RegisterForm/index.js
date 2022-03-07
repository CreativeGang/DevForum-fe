import React, { useState } from 'react';
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
import { setAlert } from '../../../../actions/alert';
import { register } from '../../../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const RegisterForm = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    password2: '',
  });

  const { name, email, firstName, lastName, password, password2 } = formData;
  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
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
      <SignUpFrom onSubmit={(e) => handleSubmit(e)}>
        <SignUpSection>
          <SignUpLabel>Username</SignUpLabel>
          <SignUpInput
            placeholder="Please Enter Your User Name"
            name="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
            required
          ></SignUpInput>
        </SignUpSection>
        <SingUpTwoColumnSection>
          <Column>
            <SignUpSection>
              <SignUpLabel>First Name</SignUpLabel>
              <SignUpInput
                placeholder="Please Enter Your First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => handleInputChange(e)}
              ></SignUpInput>
            </SignUpSection>
          </Column>
          <Column>
            <SignUpSection>
              <SignUpLabel>Last Name</SignUpLabel>
              <SignUpInput
                placeholder="Please Enter Your Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => handleInputChange(e)}
              ></SignUpInput>
            </SignUpSection>
          </Column>
        </SingUpTwoColumnSection>
        <SignUpSection>
          <SignUpLabel>Email</SignUpLabel>
          <SignUpInput
            placeholder="Please Enter Your Email"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            required
          ></SignUpInput>
        </SignUpSection>
        <SignUpSection>
          <SignUpLabel>Password</SignUpLabel>
          <PasswordWrapper>
            <SignUpInput
              type="password"
              placeholder="Please Enter Your Password"
              name="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
            ></SignUpInput>
            <PasswordStrongHint>Strong</PasswordStrongHint>
          </PasswordWrapper>
        </SignUpSection>
        <SignUpSection>
          <SignUpLabel>Password</SignUpLabel>
          <PasswordWrapper>
            <SignUpInput
              type="password"
              placeholder="Please Enter Your Password to Conform"
              name="password2"
              value={password2}
              onChange={(e) => handleInputChange(e)}
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
        <SignUpButton />
      </SignUpFrom>
    </RegisterContent>
  );
};

RegisterForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStatetoProps, { setAlert, register })(RegisterForm);
