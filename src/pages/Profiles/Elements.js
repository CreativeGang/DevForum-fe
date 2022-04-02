import styled from 'styled-components';
import { FcEngineering } from 'react-icons/fc';

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
`;

export const ProfilesHeader = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: solid 1px #e9ecee;
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

export const ProfilesTitle = styled.p`
  color: #52b8ca;
  font-size: clamp(3rem, 4vw, 5rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
`;

export const LeadIcon = styled(FcEngineering)`
  vertical-align: center;
  margin-right: clamp(0.5rem, 1vw, 1.2rem);
  line-height: 1;
`;

export const ProfilesLead = styled.p`
  font-size: clamp(1.5rem, 2vw, 3rem);
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  margin-bottom: 1rem;
  color: #8e9091;
`;

export const ProfilesContent = styled.div`
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

export const WariningMsg = styled.p``;
