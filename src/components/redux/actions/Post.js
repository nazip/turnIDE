import * as types from '../const/actionTypes/Post';
import request from 'superagent';
import url from 'components/const/StaticData';
import store from 'components/redux/store';

const requestPost = (id) => ({
  type: types.POST_FETCH_REQUEST,
  id
});

const requestError = () => ({
  type: types.POST_FETCH_ERROR
});

const requestSuccess = (response) => ({
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
                  : dispatch(requestSuccess(response.body));
            });
  };
}

const likePlus = (item) => ({
  type: types.POST_INC_LIKE,
  item
});

const postLike = (id, like) =>  (
  request.put(`${url}/post`)
  .set('Content-Type', 'application/json')
  .accept('application/json')
  .send(`{"id":${id},"like":${like}}`)
  .end(null)
);

export function incLike() {
  return (dispatch) => {
    const item = Object.assign({}, store.getState().post.entry);
    item.metadata.like += 1;
    postLike(item.id, item.metadata.like);
    dispatch(likePlus(item));
  };
}
