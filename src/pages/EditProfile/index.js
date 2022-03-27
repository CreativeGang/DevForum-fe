import React, { useState, Fragment } from 'react';
import NavBar from '../../common/layout/Navbar';
import { PageWrapper } from './Elements';
import EditProfileForm from './components/EditProfileForm';
const EditProfile = (props) => {
  const [formData, setFormDate] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;
  return (
    <PageWrapper>
      <NavBar />
      <EditProfileForm />
    </PageWrapper>
  );
};

export default EditProfile;
