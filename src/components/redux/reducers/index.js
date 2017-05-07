import { combineReducers } from 'redux';
import post from './Post';
import posts from './Posts';
import likes from './Likes';
import { reducer as formReducer } from 'redux-form';
import * as type from '../const/actionTypes/Post';

export default combineReducers({
  post,
  posts,
  likes,
  form: formReducer.plugin({
    EditBlog: (state, action) => {
      switch (action.type) {
        case type.POST_FILE_UPLOAD :
          return Object.assign({}, state,
            {values:
              Object.assign({}, state.values, {uploadFile: action.acceptFile})
            }
            );
        default:
          return state;
      }
    }
  })
});
