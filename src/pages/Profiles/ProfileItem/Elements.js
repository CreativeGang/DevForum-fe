import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiCheckDouble } from 'react-icons/bi';

export const ProfileItemContainer = styled.div`
  @media only screen and (min-width: 1040px) {
    padding: 20px 30px 30px;
    margin-top: 10px;
  }
  background-color: #ffffff;
  border: solid 1px #f3f4f5;
  padding: 20px 20px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  grid-gap: 2rem;
  align-items: center;
  padding: 1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

export const ProfilePhoto = styled.img`
  border-radius: 50%;
  width: 100%;
`;

export const ProfileInfo = styled.div`
margin: 0;
padding: 0;
}`;
export const PofileName = styled.h2`
  font-size: clamp(1.5rem, 2vw, 3rem);
  font-weight: 400;
`;
export const PofileStatus = styled.p``;

export const ProfileSpan = styled.span``;

export const ProfileLocation = styled.p``;

export const ProfileLink = styled(Link)`
  background-color: #52b8ca;
  color: #fff;
  display: inline-block;
  padding: 0.4rem 1.3rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease-in;
  line-height: 1.8;
  text-decoration: none;
  &:hover {
    background: #1ab6cf;
  }
`;
export const SkillsContainer = styled.ul`
list-style: none
margin: 0;
padding: 0;`;

export const SkillTick = styled(BiCheckDouble)`
  margin-right: 1vw;
  line-height: 1;
  font-size: 1.5rem;
  vertical-align: middle;
`;

export const Skill = styled.li`
  display: list-item;
  color: #52b8ca;
`;
