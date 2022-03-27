import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../../../actions/profile';
import { useHistory } from 'react-router-dom';
import {
  AddProfileWrapper,
  AddProfileContainer,
  AddProfileHeader,
  FormTitle,
  TitleImg,
  FormGuidlines,
  ProfileForm,
  SingleRowSection,
  SingleRowInput,
  FieldLabel,
  PropMsg,
  FormTextArea,
  SubmitionSection,
  SubmitButton,
  GoBackLink,
  DateInput,
  CheckBox,
} from './Elements';
import NewProfileIcon from '../../../../static/images/New_Topic.svg';

const AddExperienceForm = ({ addExperience }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    tp: '',
    current: false,
    description: '',
  });
  const [toDateDisabled, toggletoDateDisabled] = useState(false);
  const { company, title, location, from, to, current, description } = formData;
  let history = useHistory();
  const handleFieldChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        <ProfileForm
          onSubmit={(e) => {
            e.preventDefault();
            addExperience(formData, history);
          }}
        >
          <SingleRowSection>
            <SingleRowInput
              name="title"
              required
              placeholder="* Job Title"
              value={title}
              onChange={(e) => handleFieldChange(e)}
            />
            <PropMsg>Please enter your job title</PropMsg>
          </SingleRowSection>
          <SingleRowSection>
            <SingleRowInput
              name="company"
              required
              placeholder="* Company"
              value={company}
              onChange={(e) => handleFieldChange(e)}
            />
            <PropMsg>Could be your own company or one you work for</PropMsg>
          </SingleRowSection>
          <SingleRowSection>
            <SingleRowInput
              name="location"
              placeholder="Location"
              value={location}
              onChange={(e) => handleFieldChange(e)}
            />
            <PropMsg>City & State suggested (eg. Sydney, NSW)</PropMsg>
          </SingleRowSection>
          <SingleRowSection>
            <FieldLabel>From Date</FieldLabel>
            <DateInput
              name="from"
              placeholder="mm/dd/yyyy"
              value={from}
              onChange={(e) => handleFieldChange(e)}
            />
            <PropMsg>Your start Date (eg. 01/01/2022)</PropMsg>
          </SingleRowSection>
          <SingleRowSection>
            <FieldLabel>
              <CheckBox
                name="current"
                value={current}
                checked={current}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    current: !current,
                  });
                  toggletoDateDisabled(!toDateDisabled);
                }}
              />{' '}
              Current
            </FieldLabel>
            <PropMsg>Click if you are currently work as this</PropMsg>
          </SingleRowSection>
          <SingleRowSection>
            <FieldLabel>To Date</FieldLabel>
            <DateInput
              name="to"
              value={to}
              placeholder="mm/dd/yyyy"
              onChange={(e) => handleFieldChange(e)}
              disabled={toDateDisabled ? 'disabled' : ''}
            />
            <PropMsg>Your end Date (eg. 01/01/2022)</PropMsg>
          </SingleRowSection>
          <SingleRowSection>
            <FieldLabel>Description</FieldLabel>
            <FormTextArea
              name="description"
              placeholder="Job description "
              value={description}
              onChange={(e) => handleFieldChange(e)}
              rows="5"
              cols="30"
            />
          </SingleRowSection>
          <SubmitionSection>
            <GoBackLink to="/dashboard">Go to Dashboard</GoBackLink>
            <SubmitButton />
          </SubmitionSection>
        </ProfileForm>
      </AddProfileContainer>
    </AddProfileWrapper>
  );
};

AddExperienceForm.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperienceForm);
