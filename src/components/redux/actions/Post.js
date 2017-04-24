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

export function updatePost(item) {
  return {
    API_CALL: {
      endpoint: `/post/${item.id}.json`,
      method: 'put',
      query: {item},
      types: [
        types.POST_UPDATE_REQUEST,
        types.POST_UPDATE_SUCCESS,
        types.POST_UPDATE_ERROR
      ]
    }
  };
}
