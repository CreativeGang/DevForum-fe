import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const PublicPostPage = styled.section`
  position: relative;
`;

export const PostWrapper = styled.div`
  position: absolute;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
`;

export const NavButton = styled(Link)`
   padding: 0.8em 2em;
   margin-left: 80%;
  margin-top: 25px;
   border-radius: 2em;
   box-sizing: border-box;
   text-decoration: none;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
   color: #ffffff;
  position: absolute;
   background-color: #333;
   text-align: center;
   transition: all 0.2s;
`;
