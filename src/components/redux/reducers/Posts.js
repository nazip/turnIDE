import { POSTS_FETCH_REQUEST, POSTS_FETCH_SUCCESS,
         POSTS_FETCH_ERROR } from '../const/actionTypes/Posts';
import { LIKE_SUCCESS } from '../const/actionTypes/Like';


const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case POSTS_FETCH_REQUEST:
      return Object.assign({}, initialState, {isFetching: true});
    case POSTS_FETCH_SUCCESS:
    case LIKE_SUCCESS:
      return Object.assign({}, initialState, {entries: action.response});
    case POSTS_FETCH_ERROR:
      return Object.assign({}, initialState, {error: true});
    default:
      return state;
  }
}
