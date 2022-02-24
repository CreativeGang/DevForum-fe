import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  order: 1;
  @media only screen and (min-width: 1040px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 1039px) {
    padding-bottom: 40px;
  } ;
`;

export const LinkContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  &::before {
    display: table;
    content: ' ';
  }
  &::after {
    clear: both;
  }
  @media (min-width: 1250px) {
    width: 1202px;
    max-width: 100%;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (min-width: 1040px) {
    width: 992px;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 788px) {
    width: 740px;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 450px) {
    width: 480px;
    max-width: 100%;
  } ;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1039px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterMenu = styled.ul`
  flex-wrap: wrap;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 1040px) {
    margin-right: 30px;
  } ;
`;

export const FooterMenuItem = styled.li`
@media only screen and (min-width: 1040px){
  &:not(:last-child) {
    margin-right: 30px;
  }
};
@media only screen and (max-width: 1039px){
    &:not(:last-child) {
      margin-right: 30px;
    }
  };
  @media only screen and (max-width: 400px){
    &:not(:last-child) {
      margin-right: 10px;
    }
  };
  `;

export const FooterLink = styled(Link)`
  &:visited,
  &:active,
  &:link {
    color: #8e9091;
    text-decoration: none;
  }
  &:hover {
    color: #394047;
  }
`;

export const FooterSocial = styled.ul`
  flex-wrap: wrap;
  display: flex;
  list-style: none;
  @media only screen and (max-width: 1039px) {
    width: 100%;
    max-width: 360px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 20px;
    justify-content: space-between;
  }
`;

export const FooterSocialItem = styled.li`
  margin-right: 15px;
  &:last-child {
    margin-right: 0px;
  }
`;
