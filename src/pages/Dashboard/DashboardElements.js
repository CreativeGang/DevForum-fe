import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';


export const DashboardWrapper = styled.main`
  background: #f1f2f7;
  height: 100vh;
`;

export const DashboardHeader = styled.div`
  min-height: 70vh;
  background-color: #5395c5;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    min-height: 600px;
  }
  display: flex;
  align-items: center;
`;

export const DashboardGreeting = styled.div`
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 576px) {
    max-width: 540px;
  }
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const GreetingContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: clamp(2rem, 5vw, 5rem);
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
  line-height: 1;
  margin-bottom: 39px;
  text-align: center;
`;

export const DashboardTitle = styled.p`
  font-weight: 800;
  font-size: clamp(3rem, 3vw, 5rem);
  color: #5db5bb;
  font-family: 'Josefin Sans', sans-serif;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: solid 1px #e9ecee;
  align-items: center;
  display: flex;
`;
export const WelcomeIcon = styled(FaUser)`
  color: #5db5bb;
  margin-right: 3px;
`;
export const WelcomeWord = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  margin: 15px 0;
`;

export const PersonalBackgroundWrapper = styled.div`
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

export const PersonalBackgroundContainer = styled.div`
  background-color: #ffffff;
  border: solid 1px #f3f4f5;
  @media only screen and (min-width: 1040px) {
    padding: 20px 30px 30px;
    margin-top: 44px;
  }
  @media only screen and (max-width: 1039px) {
    padding: 20px 20px;
    margin-top: 15px;
  }
`;

export const EduExpContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  display: flex;
  @media only screen and (min-width: 480px) {
    flex-direction: column;
  }
`;

export const CreateProfileContainer= styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 30px;
  height: calc(100vh - 20px);
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding:18vh 15px;
  background-color: #fff;
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


export const DeleteSection = styled.div`
  margin-top: 3vh;
`;

export const DeleteButton = styled.button`
  outline: none;
  padding: 5px 10px;
  background-color: #eb3223;
  outline: none;
  border: none;
  color: #fff;
  border-radius: 3px;
`;



