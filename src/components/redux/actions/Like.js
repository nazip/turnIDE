import * as types from '../const/actionTypes/Like';

export function incLike(id, all) {
  return {
    API_CALL: {
      endpoint: `/post/like?id=${id}&all=${all}`,
      method: 'PUT',
      query: {},
      types: [
        types.LIKE_REQUEST,
        types.LIKE_SUCCESS,
        types.LIKE_ERROR
      ]
    }
  };
}
