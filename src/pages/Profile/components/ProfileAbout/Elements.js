import styled from 'styled-components';
import { BiCheckDouble } from 'react-icons/bi';

export const AboutWrapper = styled.div`
  grid-area: about;
  background-color: #f4f4f4;
  color: #333;
  border: #ccc 1px solid;
  padding: 2rem;
`;

export const AboutTitle = styled.h2`
color: #52b8ca;
  font-size: 1.5em;
  text-align: center;
`;

export const Bio = styled.p`
  text-align: center;
`;

export const SepLine = styled.div`
  height: 1px;
  background: #ccc;
  margin: 1.5rem 0;
`;
export const SkillTitle = styled.p`
  color: #52b8ca;
  text-align: center;
  line-height: 1.6;
  font-weight: 400;
  font-size: 1.5rem;
`;
export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Skill = styled.div`
  padding: 1rem;
  color: #333;
`;
export const SkillIcon = styled(BiCheckDouble)`
  vertical-align: middle;
`;
