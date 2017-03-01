import { combineReducers } from 'redux';
import post from './Post';
import posts from './Posts';

export default combineReducers({
  post,
  posts
});
