import * as type from '../const/actionTypes/Posts';
import pick from 'lodash/pick';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  comments: [],
  adding: false,
  addingComment: false,
  pagination: {
    activePage: 0,
    pageSize: 4,
    pageCount: 1
  }
};

const getEntries = (entries) => (
  entries.map((entry) =>
    Object.assign({}, {image: entry.image}, {txt: entry.txt}, {id: entry.id},
    {metadata: pick(entry.metadata, 'author', 'updatedAt', 'createdAt')}))
);

export default function post(state = initialState, action) {
  switch (action.type) {
    case type.POSTS_FETCH_REQUEST:
      return Object.assign({}, initialState, {isFetching: true});
    case type.POSTS_FETCH_SUCCESS:
      return Object.assign({}, initialState,
                           {entries: getEntries(action.response.entries)},
                           {pagination: action.response.pagination},
                           {comments: action.response.comments});
    case type.POSTS_FETCH_ERROR:
      return Object.assign({}, initialState, {error: true});
    case type.POSTS_ADD_TOGGLE:
      return Object.assign({}, state, {adding: !state.adding});
    case type.POSTS_ADD_REQUEST:
      return Object.assign({}, state, {adding: true});
    case type.POSTS_ADD_SUCCESS:
      return Object.assign({}, state, {adding: false});
    case type.POSTS_ADD_ERROR:
      return Object.assign({}, state, {error: true});
    default:
      return state;
  }
}
