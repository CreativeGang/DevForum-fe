import styled from 'styled-components';

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
flex-direction: column`

export const Name  = styled.div`
 font-size: clamp(2rem, 5vw, 5rem);
 font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    line-height: 1;
    margin-bottom: 39px;
    text-align: center;
`

export const WelcomeWord = styled.p``;
