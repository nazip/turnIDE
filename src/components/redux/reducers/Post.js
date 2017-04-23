import * as type from '../const/actionTypes/Post';

const initialState = {
  isFetching: false,
  error: false,
  entry: null,
  edit: false
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case type.POST_FETCH_REQUEST:
      return Object.assign({}, initialState, {isFetching: true});
    case type.POST_FETCH_SUCCESS:
      return Object.assign({}, initialState, {entry: action.response});
    case type.POST_FETCH_ERROR:
      return Object.assign({}, initialState, {error: true});
    case type.POST_EDIT:
      return Object.assign({}, state, {edit: !state.edit});
    default:
      return state;
  }
}
