import * as types from '../const/actionTypes/Post';
import * as t from '../const/actionTypes/Comments';

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

export function addComment(values) {
  const {id, comment, phone} = values;
  return {
    API_CALL: {
      endpoint: `/post/${id}/comment`,
      method: 'post',
      query: {comment, phone},
      types: [
        t.COMMENT_ADD_REQUEST,
        t.COMMENT_ADD_SUCCESS,
        t.COMMENT_ADD_ERROR
      ]
    }
  };
}
