import { POST_FETCH_REQUEST, POST_FETCH_SUCCESS,
         POST_FETCH_ERROR } from '../const/actionTypes/Post';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case POST_FETCH_REQUEST:
      return Object.assign({}, initialState, {isFetching: true});
    case POST_FETCH_SUCCESS:
      return Object.assign({}, initialState, {entry: action.response});
    case POST_FETCH_ERROR:
      return Object.assign({}, initialState, {error: true});
    default:
      return state;
  }
}
