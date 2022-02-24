import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa';


export const Nav = styled.nav`
background: #fff;
height: 80px;
display: flex;
justify-content: space-between;
font-weight: 700;
font-family: 'Nunito Sans', sans-serif;
color: #333;
padding: 2rem;
max-width: 100%;
z-index:3;

`; 

export const NavLink =  styled(Link)`
color: #333;
height: 18px;
font-size: 2rem;
display:flex;
align-items:center;
text-decoration:none;
cursor: pointer;
@media screen and (max-width: 400px) {
  position: absolute;
  top: 10px;
  left: 25px;
}`;



export const NavMenu = styled.div`
display: flex;
// width: 50vw;
flex-wrap: wrap;
cursor: pointer;
justify-content: center;
color: #fff;
@media only screen and (max-width:1040px){
  display: none;
}
`

export const SwitchableButton = styled.button`
  outline: none;
  border: none;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  background-color: #f9bc64;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }

  @media only screen and (min-width:1040px){
    display: none;
  }
`;
  


export const NavButton = styled(Link)`
font-size: 1rem;
margin: 0 1rem;
display:flex;
align-items:center;
text-decoration:none;
cursor: pointer;
`

export const MenuIcon = styled(FaPizzaSlice)`
font-size: 1.5rem;
color: #000;

 `;
// export const LoginIcon = styled(BiLogInCircle)`
// font-size: 2rem;
// transform: translate(-50%,-15%);
