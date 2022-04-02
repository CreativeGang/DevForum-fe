import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SideBarIMG from '../../../static/images/signup-bg.png';

export const AsideWrapper = styled.aside`
  position: fixed;
  right: ${({ isSideBarOpened }) => (isSideBarOpened ? '0' : '-10000px')};
  top: 0;
  z-index: 999;
  height: 100%;
  width: 310px;
  background: url(${SideBarIMG}) center center no-repeat;
  display: grid;
  transition: 0.3s ease-in-out;
  align-items: center;
  background-color: #eaecee;
  background-size: cover;
`;

export const CloseWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  cursor: pointer;
  outline: none;
`;

export const CloseSign = styled(AiOutlineClose)`
  color: #000;
  font-size: 1rem;
  &:hover {
    color: #3278a1;
  }
`;

export const OptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
`;

export const OptionItem = styled(Link)`
  text-decoration: none;
  font-family: 'Nunito Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
  &::before {
    content: '';
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${({ dotColor }) => dotColor};
    margin: 0 6px;
    margin-bottom: 1px;
  }
`;
