import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {ExpWrapper,
  Comanpy,
  ExpItem,
  ExpHead,
  Period,
  Position,
  BoldFond,
  Description
} from './Elements'
import {connect} from 'react-router-dom'

const ProfileExp = ({experience: {
  company,
  title,
  locatioin,
  current,
  to,
  from,
  description
}}) => {
  return (
    
      <ExpItem>
        <Comanpy> 
          {company}    
        </Comanpy>
        <Period><Moment format = 'YYYY/MM/DD'>
          {from}</Moment> - {!to ? ' Now' : <Moment format = 'YYYY/MM/DD'>{to}</Moment>}</Period>
        <Position><BoldFond>Position: </BoldFond>{title}</Position>
        <Description>
          <BoldFond>Description: </BoldFond>
          {description}
        </Description>
      </ExpItem>

  )
}

ProfileExp.propTypes = {
  experience: PropTypes.object.isRequired,
}



export default ProfileExp
