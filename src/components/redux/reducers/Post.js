import * as type from '../const/actionTypes/Post';

const initialState = {
  isFetching: false,
  isUpdating: false,
  error: false,
  entry: null,
  comments: [],
  editing: false,
  addComment: false
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case type.POST_FETCH_REQUEST:
      return Object.assign({}, initialState, {isFetching: true});
    case type.POST_FETCH_SUCCESS:
      return Object.assign({}, initialState, {entry: action.response});
    case type.POST_FETCH_ERROR:
      return Object.assign({}, initialState, {error: true});
    case type.POST_EDIT_TOGGLE:
      return Object.assign({}, state, {editing: !state.editing});
    case type.POST_ADD_COMMENT_TOGGLE:
      return Object.assign({}, state, {addComment: !state.addComment});
    case type.POST_UPDATE_REQUEST:
      return Object.assign({}, initialState, {isUpdating: true});
    case type.POST_UPDATE_SUCCESS:
      return Object.assign({}, initialState, {entry: action.response});
    case type.POST_UPDATE_ERROR:
      return Object.assign({}, state, {error: true});
    default:
      return state;
  }
}
