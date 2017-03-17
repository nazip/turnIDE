import { combineReducers } from 'redux';
import post from './Post';
import posts from './Posts';
import likes from './Likes';

export default combineReducers({
  post,
  posts,
  likes
});
