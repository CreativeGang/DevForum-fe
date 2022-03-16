import React,{useState} from 'react';
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
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../../../actions/auth'
import {Redirect} from 'react-router-dom';

 
const LoginForm = ({login, isAuthenticated}) => {
 const [formData, setFormData] = useState({
   email: '',
   password:''
 })

 const {email, password} = formData;
 const handleInputChange = e => {
   setFormData({...formData, [e.target.name]: e.target.value})
 }
 const handleSubmitForm = async e => {
  e.preventDefault();
  login(email, password)
 }

 //Redirect if logged in
 if(isAuthenticated){
   return <Redirect to = '/dashboard'/>
 }
  return (
    <LoginContent>
      <LoginLogoWrapper>
        <LogoContainer>
          <LogoIcon />
          <LogoLink to="/">DevForum </LogoLink>
        </LogoContainer>
      </LoginLogoWrapper>
      <Intro>
        <IntroTitle>Login to writer and answer</IntroTitle>
        <IntroContent>Find the answer of your promble quickly!</IntroContent>
      </Intro>
      <LoginFrom onSubmit = { e => handleSubmitForm(e)}>
        <LoginSection>
          <LoginLabel>Username</LoginLabel>
          <LoginInput
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            required 
            placeholder="Please Enter Your User Name"></LoginInput>
        </LoginSection>
        <LoginSection>
          <LoginLabel>Password</LoginLabel>
          <PasswordWrapper>
            <LoginInput
               name="password"
               value={password}
              type="password"
              placeholder="Please Enter Your Password"
            onChange={(e) => handleInputChange(e)}
              required
            ></LoginInput>
          </PasswordWrapper>
        </LoginSection>
        <LoginButton/>
      </LoginFrom>
    </LoginContent>
  );
};
const mapStatetoProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

export default connect(mapStatetoProps, {login})(LoginForm);
