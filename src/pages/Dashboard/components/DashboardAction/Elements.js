import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { GiTie } from 'react-icons/gi';
import { ImUserTie } from 'react-icons/im';

export const DashbaordButtonsWrapper = styled.div`
  display: flex;
`;

export const ProfileIcon = styled(ImUserTie)`
  color: #5db5bb;
  margin-right: 5px;
`;
export const EducationIcon = styled(MdOutlineCastForEducation)`
  color: #5db5bb;
  margin-right: 5px;
`;
export const ExpIcon = styled(GiTie)`
  color: #5db5bb;
  margin-right: 5px;
`;

export const DashbaordButton = styled(Link)`
  padding: 3px 5px;
  background-color: #e9ecee;
  font-family: 'Nunito Sans', sans-serif;
  text-decoration: none;
  cursor: pointer;
  color: #333;
  margin-right: 5px;
  border-radius: 3px;
  &:active,
  &:link,
  &:visited {
    color: #333;
  }
  &:active {
    color: #8e9091;
  }
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  line-height: 1.75;
  background-color: #e9ecee;
`;
