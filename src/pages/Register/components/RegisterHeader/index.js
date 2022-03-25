import React from 'react';
import {
  NavWrapper,
  NavContainer,
  NavContent,
  NavTextWrapper,
  NavText,
  NavLoginButton,
} from './RegisterHeaderElements';

const RegisterNavbar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <NavContent>
          <NavTextWrapper>
            <NavText to="/register">Already have an account?</NavText>
          </NavTextWrapper>
          <NavLoginButton to="/login">Sign In</NavLoginButton>
        </NavContent>
      </NavContainer>
    </NavWrapper>
  );
};

export default RegisterNavbar;
