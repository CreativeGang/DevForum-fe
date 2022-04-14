import axios from 'axios';
import {setAlert} from './alert'
import {
  CHANGE_POST,
  GET_POST,
  POST_ERROR
} from './constants.js';


//Get posts

export const getPost = (id) => async dispatch => {
  try{
    const res = await axios.get(process.env.REACT_APP_API_URL + `/v1/post/${id}`)
    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch(err){
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}
export const changePost = (postContent) => {
  return {
    type: CHANGE_POST,
    postContent,
  };
};
