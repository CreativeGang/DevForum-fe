import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Moment from 'react-moment';
import {deleteExperience} from '../../../../actions/profile'
import {
  ExperienceWrapper,
  ExperienceHeader,
  ExperienceTable,
  ExperienceThead,
  ExperienceTableRow,
  ExperienceTableHeading,
  ExperienceTableBody,
  ExperienceTableData,
  ExperienceTableButton,
} from './Elements';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <ExperienceTableRow key={exp._id}>
      <ExperienceTableData>{exp.company}</ExperienceTableData>
      <ExperienceTableData>{exp.title}</ExperienceTableData>
      <ExperienceTableData>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
        {exp.to === undefined ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </ExperienceTableData>
      <ExperienceTableData>
        <ExperienceTableButton onClick={() => deleteExperience(exp.id)}>Delete</ExperienceTableButton>
      </ExperienceTableData>
    </ExperienceTableRow>
  ));
  return (
    <ExperienceWrapper>
      <ExperienceHeader>Experience Credentials</ExperienceHeader>
      <ExperienceTable>
        <ExperienceThead>
          <ExperienceTableRow>
            <ExperienceTableHeading>Company</ExperienceTableHeading>
            <ExperienceTableHeading>Title</ExperienceTableHeading>
            <ExperienceTableHeading>Years</ExperienceTableHeading>
            <ExperienceTableHeading></ExperienceTableHeading>
          </ExperienceTableRow>
        </ExperienceThead>
        <ExperienceTableBody>{experiences}</ExperienceTableBody>
      </ExperienceTable>
    </ExperienceWrapper>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience:PropTypes.func.isRequired,
};

export default connect(null, {deleteExperience})(Experience);
