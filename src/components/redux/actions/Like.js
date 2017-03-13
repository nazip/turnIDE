import * as types from '../const/actionTypes/Posts';
import { POST_INC_LIKE } from '../const/actionTypes/Post';
import request from 'superagent';
import url from 'components/const/StaticData';
import store from 'components/redux/store';

const likePlus = (items) => ({
  type: items instanceof Array ? types.POSTS_INC_LIKE : POST_INC_LIKE,
  items
});

const updatePost = (item) =>  (
  request.put(`${url}/post`)
  .set('Content-Type', 'application/json')
  .accept('application/json')
  .send(`{"id":${item.id},"like":${item.metadata.like}}`)
  .end(null)
);

const addLike = (item) => {
  const m = Object.assign({}, item);
  m.metadata.like += 1;
  return m;
};

export function incLike(id) {
  let changedItem = null;
  return (dispatch) => {
    const items = store.getState().posts.entries.map((item) => {
      if (item.id !== id) return item;
      changedItem = addLike(item);
      return changedItem;
    });
    if (changedItem == null) changedItem = addLike(store.getState().post.entry);
    updatePost(changedItem);
    if (items.length > 0) dispatch(likePlus(items));
    if (store.getState().post.entry !== null) dispatch(likePlus(changedItem));
  };
}
