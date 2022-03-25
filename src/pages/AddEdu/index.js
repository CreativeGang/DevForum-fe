import React from 'react'

import AddEducationForm from './compnents/AddEduForm'
import NavBar from '../../common/layout/Navbar'
import {PageWrapper} from './Elements'

const AddEducation = props => {
  return (
    <PageWrapper>
      <NavBar/>
      <AddEducationForm/>
    </PageWrapper>
  )
}
export default AddEducation
