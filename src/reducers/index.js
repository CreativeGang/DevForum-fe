import { combineReducers } from 'redux';
import { post } from './post';
import posts from '../store/posts';
import filter from '../store/filter';
export default combineReducers({
  post,
  posts,
  filter,
});
