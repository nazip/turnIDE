import { fetchPost, addComment } from '../Post';
import  createStore  from 'components/redux/store';
import _ from 'lodash';

describe('Post action', () => {
  const store = createStore();
  const comment = {
    id: 1,
    postId: 1,
    comment: 'test comment' ,
    phone: '123-321'
  };

  beforeEach(() => {
    store.dispatch(fetchPost(1));
  });

  it('fetch Post', () => {
    expect(store.getState().post.entry).toBeDefined();
  });

  it('fetch Post without error', () => {
    expect(store.getState().post.error).toEqual(false);
  });

  it('add comment', () => {
    expect.assertions(1);
    return store.dispatch(addComment(comment))
    .then((data) => expect(
      _.findIndex(data, (a) => a.comment == comment.comment)).not.toEqual(-1));
  });
});
