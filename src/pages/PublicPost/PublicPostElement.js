import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const PublicPostPage = styled.section`
  position: relative;
`;

export const PostWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  
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

export const PostContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
`;

export const NavButton = styled(Link)`
   padding: 0.8em 2em;
   margin-left: 61%;
   border-radius: 2em;
   box-sizing: border-box;
   text-decoration: none;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  color: #ffffff;
  position: absolute;
   background-color: #333;
   text-align: center;
   transition: all 0.2s;

  @media only screen and (min-width: 450px) {
     margin-left: 73%;
  }
  @media only screen and (min-width: 768px) {
     margin-left: 78%;
  }

  @media only screen and (min-width: 788px) {
     margin-left: 65%;
  }

  @media only screen and (min-width: 992px) {
     margin-left: 81%;

  @media only screen and (min-width: 1040px) {
     margin-left: 65%;
  }

  @media only screen and (min-width: 1200px) {
     margin-left: 65%;
  }

  @media only screen and (min-width: 1250px) {
     margin-left: 83%;
  }
`;
