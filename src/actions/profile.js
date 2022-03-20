import axios from 'axios';
import  {setAlert} from './alert'
import {
  GET_PROFILE,
  PROFILE_ERROR
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

//Create or Update profile
export const createProfile = (formData, history, edit=false)   => async dispatch  => {
  try {
    console.log('aa')
    const config = { 
      headers: {
        'Content-Type':'application/json'
      }
    }
    console.log(process.env.REACT_APP_API_URL + 'v1/profile/')
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