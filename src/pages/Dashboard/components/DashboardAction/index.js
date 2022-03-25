import React from 'react';
import {
  DashbaordButtonsWrapper,
  DashbaordButton,
  ExpIcon,
  EducationIcon,
  ProfileIcon,
} from './Elements';

const DashboardAction = () => {
  return (
    <DashbaordButtonsWrapper>
      <DashbaordButton to="/edit_profile">
        <ProfileIcon />
        Edit Profile
      </DashbaordButton>
      <DashbaordButton to="/add_expegrience">
        <ExpIcon />
        Add Experience
      </DashbaordButton>
      <DashbaordButton to="/add_education">
        <EducationIcon />
        Add Education
      </DashbaordButton>
      <DashbaordButton to="/upload">
        <EducationIcon />
        Upload your Profile Photo
      </DashbaordButton>
    </DashbaordButtonsWrapper>
  );
};

export default DashboardAction;