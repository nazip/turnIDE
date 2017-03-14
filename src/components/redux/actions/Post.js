import * as types from '../const/actionTypes/Post';
import request from 'superagent';
import url from 'components/const/StaticData';

const requestPost = (id) => ({
  type: types.POST_FETCH_REQUEST,
  id
});

const requestError = () => ({
  type: types.POST_FETCH_ERROR
});

export const requestSuccess = (response) => ({
  type: types.POST_FETCH_SUCCESS,
  response
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
            .get(`${url}/post/${id}.json`)
            .end((err, response) => {
              err ? dispatch(requestError())
                  : dispatch(requestSuccess(response.body[0]));
            });
  };
}
