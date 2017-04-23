import { combineReducers } from 'redux';
import post from './Post';
import posts from './Posts';
import likes from './Likes';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  post,
  posts,
  likes,
  form: formReducer
});
