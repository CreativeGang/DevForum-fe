import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../../../actions/profile';
import {
  EducationWrapper,
  EducationHeader,
  EducationTable,
  EducationThead,
  EducationTableRow,
  EducationTableHeading,
  EducationTableBody,
  EducationTableData,
  EducationTableButton,
} from './Elements';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <EducationTableRow key={edu._id}>
      <EducationTable Data>{edu.school}</EducationTable>
      <EducationTableData>{edu.degree}</EducationTableData>
      <EducationTableData>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
        {edu.to === undefined ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </EducationTableData>
      <EducationTableData>
        <EducationTableButton onClick={() => deleteEducation(edu.id)}>Delete</EducationTableButton>
      </EducationTableData>
    </EducationTableRow>
  ));
  return (
    <EducationWrapper>
      <EducationHeader>Education Credentials</EducationHeader>
      <EducationTable>
        <EducationThead>
          <EducationTableRow>
            <EducationTableHeading>Company</EducationTableHeading>
            <EducationTableHeading>Title</EducationTableHeading>
            <EducationTableHeading>Years</EducationTableHeading>
            <EducationTableHeading></EducationTableHeading>
          </EducationTableRow>
        </EducationThead>
        <EducationTableBody>{educations}</EducationTableBody>
      </EducationTable>
    </EducationWrapper>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, {deleteEducation})(Education);
