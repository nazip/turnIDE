import * as types from '../const/actionTypes/Posts';

export function fetchPosts() {
  return {
    API_CALL: {
      endpoint: '',
      method: 'GET',
      query: {},
      types: [
        types.POSTS_FETCH_REQUEST,
        types.POSTS_FETCH_SUCCESS,
        types.POSTS_FETCH_ERROR
      ]
    }
  };
}

// export function fetchPosts(PageNumber, PageSize) {
//   return {
//     API_CALL: {
//       endpoint: '/post/index.json',
//       method: 'GET',
//       query: {PageNumber, PageSize},
//       types: [
//         types.POSTS_FETCH_REQUEST,
//         types.POSTS_FETCH_SUCCESS,
//         types.POSTS_FETCH_ERROR
//       ]
//     }
//   };
// }
