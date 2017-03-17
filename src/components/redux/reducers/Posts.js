import * as type from '../const/actionTypes/Posts';
import _ from 'lodash';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  pagination: {
    activePage: 0,
    pageSize: 4,
    pageCount: 1
  }
};

const getEntries = (entries) => (
  entries.map((entry) =>
    Object.assign({}, {image: entry.image}, {txt: entry.txt}, {id: entry.id},
    {metadata: _.pick(entry.metadata, 'author', 'updatedAt', 'createdAt')}
  ))
);

export default function post(state = initialState, action) {
  switch (action.type) {
    case type.POSTS_FETCH_REQUEST:
      return Object.assign({}, initialState, {isFetching: true});
    case type.POSTS_FETCH_SUCCESS:
      return Object.assign({}, initialState,
                           {entries: getEntries(action.response.entries)},
                           {pagination: action.response.pagination});
    case type.POSTS_FETCH_ERROR:
      return Object.assign({}, initialState, {error: true});
    case type.SET_PAGESIZE:
      return Object.assign({}, state,
        {pagination: {
          activePage: 0,
          pageSize: Math.max(state.pagination.pageSize + action.pageSize, 1),
          pageCount: 1}
        });
    default:
      return state;
  }
}
