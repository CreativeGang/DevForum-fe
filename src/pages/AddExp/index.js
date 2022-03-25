import React from 'react'

import AddExpForm from './components/AddExpForm'
import NavBar from '../../common/layout/Navbar'
import {PageWrapper} from './Elements'

const CreateProfile = props => {
  return (
    <PageWrapper>
      <NavBar/>
      <AddExpForm/>
    </PageWrapper>
  )
}
export default CreateProfile
