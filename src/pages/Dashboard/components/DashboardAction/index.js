import React from 'react'
import {DashbaordButtonsWrapper, DashbaordButton} from './Elements'

const DashboardAction = () => {
  return (
    <DashbaordButtonsWrapper>
      <DashbaordButton to = '/edit_profile'>
        Edit Profile
      </DashbaordButton>

    </DashbaordButtonsWrapper>
  )
}

export default DashboardAction
