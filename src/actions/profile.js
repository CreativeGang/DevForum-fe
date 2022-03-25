import axios from 'axios';
import  {setAlert} from './alert'
import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_PROFILES,
  GET_REPOS
} from './constants';
//Get Current User's Profile

export const getCurrentProfile = () => async dispatch => {
  try{
    const res = await axios.get(process.env.REACT_APP_API_URL + '/v1/profile/me')
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err){
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  } 
} 


//Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({
    type: CLEAR_PROFILE,
  })
  try{
    const res = await axios.get(process.env.REACT_APP_API_URL + '/v1/profile/')
    dispatch({
      type: GET_PROFILES,
      payload: res.data
    })
  } catch (err){
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  } 
} 

//Get Profile by ID
export const getProfileById = userId => async dispatch => {

  try{
    const res = await axios.get(process.env.REACT_APP_API_URL + `/v1/profile/user/${userId}`)
    dispatch({  
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err){
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  } 
} 

//Get Repo
export const getGithubRepos = userName => async dispatch => {

  try{
    const res = await axios.get(process.env.REACT_APP_API_URL + `/v1/profile/github/${userName}`)
    dispatch({  
      type: GET_REPOS,
      payload: res.data
    })
  } catch (err){
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  } 
} 

//Create or Update profile
export const createProfile = (formData, history, edit=false)   => async dispatch  => {
  try {
    const config = { 
      headers: {
        'Content-Type':'application/json'
      }
    }
    const res  = await axios.post(process.env.REACT_APP_API_URL + '/v1/profile/', formData, config)
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
    dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created', 'success'))
    if(!edit){
      history.push('/dashboard')
    }
  } catch(err){
    const errors = err.response.data.msg.errorArray
    if(errors){
      errors.forEach(error => dispatch(setAlert(error, 'danger'
      )))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })  

  } 
}


//Add Experience
export const addExperience = (formData, history) => async dispatch  => {
  try {
    const config = { 
      headers: {
        'Content-Type':'application/json'
      }
    }
    const res  = await axios.put(process.env.REACT_APP_API_URL + '/v1/profile/experience', formData, config)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })
    dispatch(setAlert('Experience Added', 'success'))

      history.push('/dashboard')

  } catch(err){
    const errors = err.response.data.msg.errorArray
    if(errors){
      errors.forEach(error => dispatch(setAlert(error, 'danger'
      )))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })  

  } 
}

//Add Education
export const AddEducation = (formData, history) => async dispatch  => {
  try {
    const config = { 
      headers: {
        'Content-Type':'application/json'
      }
    }
    const res  = await axios.put(process.env.REACT_APP_API_URL + '/v1/profile/education', formData, config)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })
    dispatch(setAlert('Education Added', 'success'))

    history.push('/dashboard')

  } catch(err){
    const errors = err.response.data.msg.errorArray
    if(errors){
      errors.forEach(error => dispatch(setAlert(error, 'danger'
      )))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })  

  } 
}


//Delete Experience 
export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(process.env.REACT_APP_API_URL+ `/v1/profile/experience/${id}`)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })
    dispatch(setAlert('Experience Deleted', 'success'))
  } catch(err){
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//Delete Education 
export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(process.env.REACT_APP_API_URL+ `/v1/profile/education/${id}`)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })
    dispatch(setAlert('Education Deleted', 'success'))
  } catch(err){
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}


//Delete Account & Profile
export const deleteAccount= () => async dispatch => {
  if(window.confirm('Are you sure to delete your account?')){
    try {
      const res = await axios.delete(process.env.REACT_APP_API_URL+ '/v1/profile/')
      dispatch({
        type: CLEAR_PROFILE,
      })
      dispatch({
        type: ACCOUNT_DELETED,
      })
      dispatch(setAlert('Your account has been deleted', 'success'))
    } catch(err){
      dispatch({
        type: PROFILE_ERROR,
        payload: {msg: err.response.statusText, status: err.response.status}
      })
    }
  }
}



