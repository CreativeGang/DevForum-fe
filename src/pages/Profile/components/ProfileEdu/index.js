import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {
  School,
  FieldOfStudy,
  EduItem,
  Period,
  Degree,
  BoldFond,
  Description
} from './Elements'
import {connect} from 'react-router-dom'

const ProfileEdu = ({education: {
  school,
  degree,
  fieldofstudy,
  current,
  to,
  from,
  description
}}) => {
  return (
    
      <EduItem>
        <School> 
          {school}    
        </School>
        <Period><Moment format = 'YYYY/MM/DD'>
          {from}</Moment> - {!to ? ' Now' : <Moment format = 'YYYY/MM/DD'>{to}</Moment>}</Period>
        <Degree><BoldFond>Degree: </BoldFond>{degree}</Degree>
        <FieldOfStudy><BoldFond>Field of Study: </BoldFond>{fieldofstudy}</FieldOfStudy>
        <Description>
          <BoldFond>Description: </BoldFond>
          {description}
        </Description>
      </EduItem>

  )
}

ProfileEdu.propTypes = {
  education: PropTypes.object.isRequired,
}



export default ProfileEdu
