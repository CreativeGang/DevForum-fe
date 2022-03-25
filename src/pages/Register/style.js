import styled from 'styled-components';

export const RegisterPage = styled.div`
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  &::before {
    display: table;
    content: ' ';
  }
  &::after {
    display: table;
    content: ' ';
  }
`;

export const RegisterWrapper = styled.div`
  position: relative;
  font-family: 'Nunito Sans', sans-serif;
  &::before {
    display: table;
    content: ' ';
  }
  &::after {
    display: table;
    content: ' ';
    clear: both;
  }
  @media only screen and (max-width: 1400px) {
    padding-top: 30px;
    height: 1060px;
  } ;
`;

export const RegisterBgm = styled.img`
  max-width: 100%;
  position: absolute;
  margin-left: 73px;
  top: -53px;
  max-height: 1122px;
  @media only screen and (max-width: 1039px) {
    display: none;
  } ;
`;
