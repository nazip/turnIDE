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

const likePlus = (entries) => ({
  type: types.POST_INC_LIKE,
  entries
});

export function incLike(id, items) {
  return (dispatch) => {
    const items = items.map((item) => (
      item.map((item) => {
        if (item.id !== id) return item;
        const m = Object.assign({}, item);
        m.metadata.like += 1;
        this.postLike(m.id, m.metadata.like);
        return m;
      })
    ));
    this.setState({items});
    dispatch(likePlus(items));
  };
}
