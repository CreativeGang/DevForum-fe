import React, { useState, Fragment } from 'react';

import { connect } from 'react-redux';
import { createProfile } from '../../../../actions/profile';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AddProfileWrapper,
  AddProfileContainer,
  AddProfileHeader,
  FormTitle,
  TitleImg,
  FormGuidlines,
  ProfileForm,
  TwoColumnSection,
  SingleRowSection,
  SingleRowInput,
  FieldLabel,
  Column,
  FormSelect,
  FormOption,
  PropMsg,
  FormTextArea,
  OptionalBar,
  LinkTab,
  OptionalTab,
  FaceBookIcon,
  YoutubeIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  SubmitionSection,
  SubmitButton,
  GoBackLink,
} from './Elements';
import NewProfileIcon from '../../../../static/images/New_Topic.svg';
const AddProfileForm = ({ createProfile }) => {
  const [formData, setFormData] = useState({
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
  let history = useHistory();
  const [displaySocial, ToggleDisplaySocial] = useState(false);
  const handleFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <AddProfileWrapper>
      <AddProfileContainer>
        <AddProfileHeader>
          <FormTitle>
            <TitleImg src={NewProfileIcon} />
            Create New Profile
          </FormTitle>
          <FormGuidlines>Forum Guidelines</FormGuidlines>
        </AddProfileHeader>
        <ProfileForm onSubmit={(e) => handleSubmit(e)}>
          <SingleRowSection>
            <FieldLabel>Skills</FieldLabel>
            <SingleRowInput
              name="skills"
              placeholder="* Skills"
              value={skills}
              onChange={(e) => handleFieldChange(e)}
            />
            <PropMsg>
              Please use comma seperated values (eg. HTML,CSS,JavaScript)
            </PropMsg>
          </SingleRowSection>
          <SingleRowSection>
            <FieldLabel>Company</FieldLabel>
            <SingleRowInput
              name="company"
              placeholder="Company"
              value={company}
              onChange={(e) => handleFieldChange(e)}
            />
            <PropMsg>Could be your own company or one you work for</PropMsg>
          </SingleRowSection>
          <TwoColumnSection>
            <Column>
              <FieldLabel>Status</FieldLabel>
              <FormSelect
                name="status"
                value={status}
                onChange={(e) => handleFieldChange(e)}
              >
                <FormOption vallue="0">Select Professional Status</FormOption>
                <FormOption vallue="Developer">Developer</FormOption>
                <FormOption vallue="Junior Developer">
                  Junior Developer
                </FormOption>
                <FormOption vallue="Senior Developer">
                  Senior Developer
                </FormOption>
                <FormOption vallue="Manager">Manager</FormOption>
                <FormOption vallue="Student or Learning">
                  Student or Learning
                </FormOption>
                <FormOption vallue="Intern">Intern</FormOption>
                <FormOption vallue="Other">Other</FormOption>
              </FormSelect>
              <PropMsg>
                Give us an idea of where you are at in your career
              </PropMsg>
            </Column>
            <Column>
              <FieldLabel>Github Username</FieldLabel>
              <SingleRowInput
                name="githubusername"
                placeholder="Please enter your personal github name"
                value={githubusername}
                onChange={(e) => handleFieldChange(e)}
              />
              <PropMsg>
                If you want your latest repos and a Github link, include your
                username
              </PropMsg>
            </Column>
          </TwoColumnSection>
          <TwoColumnSection>
            <Column>
              <FieldLabel>Location</FieldLabel>
              <SingleRowInput
                name="location"
                placeholder="Please enter your workplace location"
                value={location}
                onChange={(e) => handleFieldChange(e)}
              />
              <PropMsg>City & State suggested (eg. Sydney, NSW)</PropMsg>
            </Column>
            <Column>
              <FieldLabel>Website</FieldLabel>
              <SingleRowInput
                name="website"
                placeholder="Please enter your personal website"
                value={website}
                onChange={(e) => handleFieldChange(e)}
              />
              <PropMsg>Could be your own or a company website</PropMsg>
            </Column>
          </TwoColumnSection>

          <SingleRowSection>
            <FieldLabel>Bio</FieldLabel>
            <FormTextArea
              name="bio"
              placeholder="a short bio of yourself"
              value={bio}
              onChange={(e) => handleFieldChange(e)}
            />
            <PropMsg>Tell us a little about yourself</PropMsg>
          </SingleRowSection>
          <OptionalBar>
            <LinkTab onClick={() => ToggleDisplaySocial(!displaySocial)}>
              Add Social Network Links
            </LinkTab>
            <OptionalTab>Optional</OptionalTab>
          </OptionalBar>
          {displaySocial && (
            <Fragment>
              <TwoColumnSection>
                <Column>
                  <FieldLabel>
                    {' '}
                    <TwitterIcon />
                    Twitter
                  </FieldLabel>
                  <SingleRowInput
                    name="twitter"
                    placeholder="Twitter URL"
                    value={twitter}
                    onChange={(e) => handleFieldChange(e)}
                  />
                </Column>
                <Column>
                  <FieldLabel>
                    <FaceBookIcon />
                    Facebook
                  </FieldLabel>
                  <SingleRowInput
                    name="facebook"
                    placeholder="Facebook URL"
                    value={facebook}
                    onChange={(e) => handleFieldChange(e)}
                  />
                </Column>
              </TwoColumnSection>
              <TwoColumnSection>
                <Column>
                  <FieldLabel>
                    {' '}
                    <YoutubeIcon />
                    Youtube
                  </FieldLabel>
                  <SingleRowInput
                    name="youtube"
                    placeholder="Youtube URL"
                    value={youtube}
                    onChange={(e) => handleFieldChange(e)}
                  />
                </Column>
                <Column>
                  <FieldLabel>
                    {' '}
                    <LinkedinIcon />
                    Linkedin
                  </FieldLabel>
                  <SingleRowInput
                    name="linkedin"
                    placeholder="Linkedin URL"
                    value={linkedin}
                    onChange={(e) => handleFieldChange(e)}
                  />
                </Column>
              </TwoColumnSection>
              <SingleRowSection>
                <FieldLabel>
                  <InstagramIcon />
                  Instagram
                </FieldLabel>
                <SingleRowInput
                  name="instagram"
                  placeholder="Instagram URL"
                  value={instagram}
                  onChange={(e) => handleFieldChange(e)}
                />
              </SingleRowSection>
            </Fragment>
          )}
          <SubmitionSection>
            <GoBackLink to="/dashboard">Go to Dashboard</GoBackLink>
            <SubmitButton />
          </SubmitionSection>
        </ProfileForm>
      </AddProfileContainer>
    </AddProfileWrapper>
  );
};

AddProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })((AddProfileForm));
