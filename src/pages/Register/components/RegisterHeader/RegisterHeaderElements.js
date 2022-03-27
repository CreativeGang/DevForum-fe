import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  padding: 34px 0 24px;
  display: block;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  line-height: 1.75;
  clear: both;
  @media only screen and (max-width: 1039px) {
    order: 1;
  } ;
`;

export const NavContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 1250px) {
    width: 1202px;
    max-width: 100%;
  }

  @media only screen and (max-width: 1040px) {
    width: 992px;
    max-width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    width: 1170px;
  }

  @media only screen and (max-width: 992px) {
    width: 970px;
  }

  @media only screen and (max-width: 788px) {
    width: 740px;
    max-width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 750px;
  }

  @media only screen and (max-width: 450px) {
    width: 480px;
    max-width: 100%;
  }

  @media only screen and (max-width: 1px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  width: 1202px;
  max-width: 100%;
  color: #333;
  font-size: 1rem;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &::before {
    display: table;
    content: ' ';
  }
  &::after {
    clear: both;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 300;
  @media only screen and (max-width: 1039px) {
    justify-content: center;
  }
`;

export const NavTextWrapper = styled.p`
  margin: 0 15px 0 0;
  @media only screen and (max-width: 1039px) {
    margin: 0;
  }
`;

export const NavText = styled(Link)`
  color: #8e9091;
  &:link {
    text-decoration: none;
  }
  &:hover {
    color: #394047;
  }
  @media only screen and (max-width: 1039px) {
    display: block;
    max-width: 100%;
  } ;
`;

export const NavLoginButton = styled(Link)`
font-weight: 300;
height： 1rem;
padding: 8px 15px;
display: inline-flex;
font-size: 16px;
border-radius: 0;
background-color: #e9ecee;
justify-content: center;
align-items: center;
font-weight: 400;
line-height: 1.42857143;
text-align: center;
white-space: nowrap;
vertical-align: middle;
cursor: pointer;
user-select: none;
background-image: none;
border: 1px solid transparent;
&:link, &:visited{
  color: #394047;
  text-decoration: none;
};
&:active {
  background-image: none;
  outline: 0;
  box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
};
@media only screen and (max-width: 1039px) {
  background-color:transparent;
  color: #8e9091;
  padding: 8px 4px;
};
`;
