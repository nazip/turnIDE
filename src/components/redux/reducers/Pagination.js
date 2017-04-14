import { POSTS_FETCH_SUCCESS }  from '../const/actionTypes/Posts';
import * as type  from '../const/actionTypes/Pagination';
import { fetchPosts }  from 'components/redux/actions/Posts';

const initialState = {
  pagination: {
    activePage: 0,
    pageSize: 4,
    pageCount: 1
  }
};

export default function pagination(state = initialState, action) {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return Object.assign({}, initialState,
                           {pagination: action.response.pagination});
    case type.SET_PAGESIZE:
      fetchPosts(state.posts.pagination.activePage, action.pageSize);
      return state;
    case type.SET_ACTIVEPAGE:
      fetchPosts(action.activePage, state.posts.pagination.pageSize);
      return state;
    default:
      return state;
  }
}
