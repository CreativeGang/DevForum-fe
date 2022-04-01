import React, { Fragment } from 'react';
import { PropMessage, WarningIcon } from './ProfileFormElements';
import {DashbaordButtonsWrapper, DashbaordButton, ProfileIcon, PhotoIcon } from '../DashboardAction/Elements'

const CreateProfileForm = () => {
  return (
    <Fragment>
      <PropMessage>
        <WarningIcon/>
        You have not yet setup a profile, please add some info
      </PropMessage>
      <DashbaordButtonsWrapper>
      <DashbaordButton to="/create_profile">
        <ProfileIcon />
        Create Profile
      </DashbaordButton>
      <DashbaordButton to="/upload">
        <PhotoIcon />
        Upload Photo
      </DashbaordButton>
      </DashbaordButtonsWrapper>
    </Fragment>
  );
};



export default CreateProfileForm;
