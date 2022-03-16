import { combineReducers } from 'redux';

import { post } from './post';
import alert from './alert';
import auth from './auth';
import posts from '../store/posts';
import filter from '../store/filter';
import profile from './profile';
import user from '../store/users';

export default combineReducers({
  alert,
  auth,
  post,
  posts,
  filter,
  profile,
  user,
});
