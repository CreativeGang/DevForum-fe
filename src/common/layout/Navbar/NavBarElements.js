import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { MdOutlineForum } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

export const NavWrapper = styled.div`
  position: relative;
  border-bottom: solid 1px #e9ecee;
  background-color: #ffffff;
  z-index: 99;
`;

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-family: 'Nunito Sans', sans-serif;
  color: #333;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  max-width: 100%;
  z-index: 999;
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

export const NavLink = styled.div`
  color: #333;
  height: 18px;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  z-index: 999;
  @media only screen and (min-width: 1040px) {
    // padding-top: 30px;
    // padding-bottom: 30px;
    position: relative;
    width: 170px;
    // padding-right: 56px;
    border-right: solid 1px #e9ecee;
  }
`;

export const LogoWrapper = styled.div`
display: flex;
align-items;center;
line-height: 1.216;
`;

export const Logo = styled(MdOutlineForum)`
  font-size: 28px;
  color: #52b8ca;
`;

export const LinkCollectionButton = styled.div`
  margin-left: 15px;
  font-weight: 700;
  font-size: 18px;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const DownArrow = styled(AiOutlineDown)`
  margin-top: 2px;
  margin-left: 6px;
  font-size: 13px;
  transform: rotate(-90deg);
`;

export const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  justify-content: center;
  color: #fff;
  @media only screen and (max-width: 1040px) {
    display: none;
  }
  // border-left: solid 1px #e9ecee;
`;

export const SwitchableButton = styled.button`
  outline: none;
  border: none;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  background-color: #fff;
  transform: translate(-26%, 0);
  &:focus {
    outline: none;
  }
  @media only screen and (min-width: 1040px) {
    display: none;
  }
`;

export const NavButton = styled(Link)`
  font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  color: #333333;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: #3278a1;
  }
  padding: 25px 0;
`;

export const MenuIcon = styled(AiOutlineMenu)`
  font-size: 1.5rem;
  color: #52b8ca;
  transform: translate(-10%, 100%);
  color: #000;
  &:hover {
    color: #3278a1;
  }
`;

export const LinkMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  border-top: solid 1px #f9bc64;
  min-width: 200px;
  box-shadow: 0px 1px 2px 0px rgb(0 0 0 / 8%);
  padding: 20px 0;
  font-size: 16px;
  background-color: #ffffff;
  flex-direction: column;
  z-index: 999;
  display: flex;
`;

export const LinkMenuContainer = styled.ul`
  padding-left: 30px;
  padding-right: 30px;
`;

export const LinkItem = styled.li`
  margin-bottom: 4px;
  font-family: 'Nunito Sans', sans-serif;
  list-style: none;
  font-weight: 300;
`;

export const LinkName = styled(Link)`
  color: #8e9091;
  text-decoration: none;
  transition: color 0.4s;
  &:hover {
    color: #394047;
  }
`;
