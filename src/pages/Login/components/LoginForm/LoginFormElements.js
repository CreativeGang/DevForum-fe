import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';

export const LoginContent = styled.div`
  width: 992px;
  max-width: 100%;
  padding: 0 15px;
  position: absolute;
  top: 0px;
  max-width: 770px;
  margin: 0 auto;
  @media only screen and (min-width: 1241px) {
    width: 992px;
    max-width: 100%;
    padding-top: 110px;
    margin: 0 11%;
  }
  @media screen and (max-width: 1240px) {
    width: 992px;
    max-width: 100%;
    padding-top: 110px;
    margin: 0 1%;
  }
  @media screen and (max-width: 788px) {
    width: 740px;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    width: 480px;
    max-width: 100%;
    padding-top: 37px;
  } ;
`;
export const LoginLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  color: #394047;
  display: flex;
  font-weight: 700;
  align-items: center;
  font-size: clamp(1rem, 3vw, 3rem);
`;
export const LogoIcon = styled(BsFillFileEarmarkPostFill)`
  font-size: 2rem;
  margin-right: 30px;
  color: #f3bd4e;
`;

export const LogoLink = styled(Link)`
  color: #394047;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;

export const Intro = styled.div`
  margin-top: 48px;
  margin-bottom: 46px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  &::before {
    content: '';
    width: 100%;
    max-width: 236px;
    margin: 0 auto;
    padding-top: 34px;
    border-top: solid 1px #dadde1;
  }
`;
export const IntroTitle = styled.h3`
  font-size: clamp(1rem, 2vw, 5rem);
  margin: 0;
  font-weight: 600;
`;

export const IntroContent = styled.p`
  max-width: 490px;
  margin: 14px 0 0;
  line-height: 1.4;
  color: #8e9091;
`;

export const LoginFrom = styled.form`
  position: relative;
  max-width: 772px;
  margin: 0 auto;
  background-color: #ffffff;
  border: solid 1px #f3f4f5;
  border-top: solid 2px #f9bc64;
  @media only screen and (min-width: 1040px) {
    padding: 30px 44px 46px;
  }
  @media only screen and (max-width: 1039px) {
    padding: 30px 20px 46px;
  }
`;

export const LoginSection = styled.div`
  padding-bottom: 15px;
  margin-bottom: 32px;
  border-bottom: solid 2px #e9ecee;
`;

export const LoginLabel = styled.label`
  color: #8e9091;
  font-weight: 300;
  margin: 0;
  display: inline-block;
  max-width: 100%;
`;

export const LoginInput = styled.input`
  &::placeholder {
    font-weight: 300;
    color: #f1bd72;
    font-size: 0.8rem;
  }
  display: block;
  width: 100%;
  height: 34px;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 0;
  border: none;
  box-shadow: none;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  outline: none;
`;

export const LoginTwoColumnSection = styled.div`
  &::before {
    display: table;
    content: ' ';
  }
  display: flex;
  flex-wrap: wrap;
  &::after {
    clear: both;
  }
  @media only screen and (max-width: 1039px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  @media only screen and (max-width: 1039px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const LoginButton = styled.input.attrs({
  type: 'submit',
  value: 'Login',
})`
  color: #ffffff;
  height: 52px;
  font-size: 17px;
  width: 100%;
  background-color: #f9bc64;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  padding: 8px 15px;
  font-weight: 300;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  touch-action: manipulation;
  border: 1px solid transparent;
  text-decoration: none;
  @media only screen and (max-width: 450px) {
    height: 38px;
  }
`;
