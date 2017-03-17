import * as types from '../const/actionTypes/Like';

export function incLike(id) {
  return {
    API_CALL: {
      endpoint: '/post/like',
      method: 'PUT',
      query: {id},
      types: [
        types.LIKE_REQUEST,
        types.LIKE_SUCCESS,
        types.LIKE_ERROR
      ]
    }
  };
}
