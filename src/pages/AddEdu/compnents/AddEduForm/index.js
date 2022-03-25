import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddEducation } from '../../../../actions/profile';
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

const AddEducationForm = ({ AddEducation }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    tp: '',
    current: false,
    description: '',
  });
  const [toDateDisabled, toggletoDateDisabled] = useState(false);
  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;
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
        <PropMsg>* = Required Field</PropMsg>
        <ProfileForm
          onSubmit={(e) => {
            e.preventDefault();
            AddEducation(formData, history);
          }}
        >
          <SingleRowSection>
            <SingleRowInput
              name="school"
              required
              placeholder="* School or Bootcamp"
              value={school}
              onChange={(e) => handleFieldChange(e)}
            />
            <PropMsg>Please enter your school name</PropMsg>
          </SingleRowSection>
          <SingleRowSection>
            <SingleRowInput
              name="degree"
              required
              placeholder="* Degree or Certificate"
              value={degree}
              onChange={(e) => handleFieldChange(e)}
            />
          </SingleRowSection>
          <SingleRowSection>
            <SingleRowInput
              name="fieldofstudy"
              placeholder="* Field of Study"
              value={fieldofstudy}
              required
              onChange={(e) => handleFieldChange(e)}
            />
          </SingleRowSection>
          <SingleRowSection>
            <FieldLabel>From Date</FieldLabel>
            <DateInput
              name="from"
              placeholder="mm/dd/yyyy"
              value={from}
              required
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
              placeholder="Program Description "
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

AddEducationForm.propTypes = {
  AddEducation: PropTypes.func.isRequired,
};

export default connect(null, { AddEducation })(AddEducationForm);
