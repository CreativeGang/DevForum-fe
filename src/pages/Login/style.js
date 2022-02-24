import styled from 'styled-components';

export const LoginPage = styled.div`
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  &::before {
    display: table;
    content: ' ';
  };
  &::after {
    content: ' ';
  };
`;
export const LoginWrapper = styled.div`
  position: relative;
  font-family: 'Nunito Sans', sans-serif;
  height: 700px;
  &::before {
    display: table;
    content: ' ';
  };
  &::after {
    display: table;
    content: " ";
    clear:both;
  };
  @media only screen and (max-width: 1400px){
    padding-top: 30px;
    height: 970px;
  };
  
  }
  @media only screen and (max-width: 1040px){
    height: 700px;
  };
  @media only screen and (max-width: 788px){
    height: 698px;
  };
  @media only screen and (max-width: 450px){
    height: 629px;
  };
`;

export const LoginBgm = styled.img`
  max-width: 100%;
  position: absolute;
  margin-left: 73px;
  top: -53px;
  max-height: 1122px;
  @media only screen and (max-width: 1039px) {
    display: none;
  }
`;
