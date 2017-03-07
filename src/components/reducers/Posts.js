import { POSTS_FETCH_REQUEST, POSTS_FETCH_SUCCESS,
         POSTS_FETCH_ERROR, POST_INC_LIKE } from '../const/actionTypes/Posts';

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
      return Object.assign({}, initialState, {entries: action.response});
    case POSTS_FETCH_ERROR:
      return Object.assign({}, initialState, {error: true});
    case POST_INC_LIKE:
      return Object.assign({}, initialState, {entries: action.items});
    default:
      return state;
  }
}
