import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileLink = styled(Link)`
  background-color: #52b8ca;
  color: #fff;
  padding: 0.4rem 1.3rem;
  line-height: 1.5;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 0.5rem;
  outline: none;
  transition: all 0.2s ease-in;
  text-decoration: none;
  &:hover {
    background-color: #70dbe6;
    color: #fff;
  }
`;

export const PageWrapper = styled.main`
  background: #f1f2f7;
`;

export const ProfileWrapper = styled.section`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-bottom: 20px;
  padding-top: 0.5rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  &::before,
  &::after {
    display: table;
    content: ' ';
  }
  @media only screen and (min-width: 450px) {
    width: 700px;
    max-width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 750px;
  }

  @media only screen and (min-width: 788px) {
    width: 740px;
    max-width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 970px;
    max-width: 100%;
  }

  @media only screen and (min-width: 1040px) {
    width: 992px;
    max-width: 100%;
  }

  @media only screen and (min-width: 1200px) {
    width: 1170px;
  }

  @media only screen and (min-width: 1250px) {
    width: 1202px;
    max-width: 100%;
  }
`;

export const ProfileContainer = styled.div`
  @media only screen and (min-width: 1040px) {
    padding: 20px 30px 30px;
    margin-top: 44px;
  }
  background-color: #ffffff;
  border: solid 1px #f3f4f5;
  padding: 20px 30px 30px;
  margin-top: 44px;
  display: grid;
  grid-template-areas:
    'top top'
    'about about'
    'exp edu'
    'github github';
  grid-gap: 1rem;
  @media only screen and (max-width: 700px) {
    grid-template-areas:
      'top'
      'about'
      'exp'
      'edu'
      'github';
  }
`;

export const ExpWrapper = styled.div`
  grid-area: exp;
  color: #333;
  border: #ccc 1px solid;
  padding: 2rem;
  background-color: #f4f4f4;
`;

export const ExpTitle = styled.p`
  color: #52b8ca;
  font-size: 1.5em;
  font-weight: bold;
`;

export const ExpContainer = styled.div`
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: #ccc 1px dotted;
`;

export const ExpMsg = styled.p``;

export const EduWrapper = styled.div`
  grid-area: edu;
  color: #333;
  border: #ccc 1px solid;
  padding: 2rem;
  background-color: #f4f4f4;
`;

export const EduTitle = styled.p`
  color: #52b8ca;
  font-size: 1.5em;
  font-weight: bold;
`;

export const EduContainer = styled.div`
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: #ccc 1px dotted;
`;

export const EduMsg = styled.p``;
