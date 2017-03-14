import * as types from '../const/actionTypes/Like';
import request from 'superagent';
import url from 'components/const/StaticData';
import { requestSuccess  as requestSuccessPost } from './Post';
import { requestSuccess  as requestSuccessPosts } from './Posts';

const requestIncLike = (id) => ({
  type: types.LIKE_REQUEST,
  id
});

const requestError = (error) => ({
  type: types.LIKE_ERROR,
  error
});

const requestSuccess = (response) => ({
  type: types.LIKE_SUCCESS,
  response
});

export function incLike(id, all = false) {
  return (dispatch) => {
    dispatch(requestIncLike(id));
    return request.put(`${url}/post/like`)
    .set('Content-Type', 'application/json')
    .accept('application/json')
    .send(`{"id":${id}, "all":${all}}`)
    .end((err, response) => {
      if (err)
        dispatch(requestError(response.status));
      else {
        dispatch(requestSuccess(response.body));
        all ? dispatch(requestSuccessPosts(response.body)) :
              dispatch(requestSuccessPost(response.body[0]));
      }
    });
  };
}
