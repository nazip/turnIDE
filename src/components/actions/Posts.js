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

const likePlus = (items) => ({
  type: types.POST_INC_LIKE,
  items
});

const postLike = (id, like) =>  (
  request.put(`${url}/post`)
  .set('Content-Type', 'application/json')
  .accept('application/json')
  .send(`{"id":${id},"like":${like}}`)
  .end(null)
);

export function incLike(id, entries) {
  return (dispatch) => {
    const items = entries.map((item) => (
      item.map((item) => {
        if (item.id !== id) return item;
        const m = Object.assign({}, item);
        m.metadata.like += 1;
        postLike(m.id, m.metadata.like);
        return m;
      })
    ));
    dispatch(likePlus(items));
  };
}
