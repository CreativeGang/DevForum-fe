import React, {useState, Fragment} from 'react'

import AddProfileForm from './components/AddProfile'
import NavBar from '../../common/layout/Navbar'
import {PageWrapper} from './CreateProfileElements'

const CreateProfile = props => {
  return (
    <PageWrapper>
      <NavBar/>
      <AddProfileForm/>
    </PageWrapper>
  )
}
export default CreateProfile
