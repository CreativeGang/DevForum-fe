import { combineReducers } from 'redux';

import {post} from "./post"
import alert from './alert';
import auth from './auth';
import posts from '../store/posts';
import filter from '../store/filter';

export default combineReducers({
  alert,
  auth,
  post,
  posts,
  filter,

});
