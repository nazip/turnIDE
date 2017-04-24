import * as types from '../const/actionTypes/Posts';
import * as pagination from '../const/Pagination';

export function fetchPosts(activePage = pagination.ACTIVE_PAGE_DEFAULT,
                           pageSize = pagination.PAGE_SIZE_DEFAULT) {
  return {
    API_CALL: {
      endpoint: '/',
      method: 'GET',
      query: {activePage, pageSize},
      types: [
        types.POSTS_FETCH_REQUEST,
        types.POSTS_FETCH_SUCCESS,
        types.POSTS_FETCH_ERROR
      ]
    }
  };
}

export function addPost(item) {
  return {
    API_CALL: {
      endpoint: '/post',
      method: 'post',
      query: {item},
      types: [
        types.POSTS_ADD_REQUEST,
        types.POSTS_ADD_SUCCESS,
        types.POSTS_ADD_ERROR
      ]
    }
  };
}
