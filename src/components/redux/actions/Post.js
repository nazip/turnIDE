import * as types from '../const/actionTypes/Post';

export function fetchPost(id) {
  return {
    API_CALL: {
      endpoint: `/post/${id}.json`,
      method: 'GET',
      query: {},
      types: [
        types.POST_FETCH_REQUEST,
        types.POST_FETCH_SUCCESS,
        types.POST_FETCH_ERROR
      ]
    }
  };
}
