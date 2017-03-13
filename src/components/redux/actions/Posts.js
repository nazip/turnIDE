import * as types from '../const/actionTypes/Posts';
import request from 'superagent';
import url from 'components/const/StaticData';

const requestPosts = () => ({
  type: types.POSTS_FETCH_REQUEST
});

const requestError = () => ({
  type: types.POSTS_FETCH_ERROR
});
const requestSuccess = (response) => ({
  type: types.POSTS_FETCH_SUCCESS,
  response
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());
    return request
            .get(url)
            .end((err, response) => {
              err ? dispatch(requestError())
                  : dispatch(requestSuccess(response.body));
            });
  };
}
