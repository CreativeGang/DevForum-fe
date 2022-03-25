import React, { Fragment } from 'react';
import { PropMessage, CreateProfileLink } from './ProfileFormElements';

const CreateProfileForm = () => {
  return (
    <Fragment>
      <PropMessage>
        You have not yet setup a profile, please add some info
      </PropMessage>
      <CreateProfileLink to="/create_profile">Create Profile</CreateProfileLink>
    </Fragment>
  );
};

export default CreateProfileForm;
