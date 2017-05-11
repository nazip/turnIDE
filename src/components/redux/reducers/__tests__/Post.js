import { fetchPost, addComment } from 'components/redux/actions/Post';
import  createStore  from 'components/redux/store';
import _ from 'lodash';
import { incLike } from 'components/redux/actions/Like';

describe('Post reducer', () => {
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

  it('add like', () => {
    expect.assertions(1);
    const prevLike = store.getState().likes.likes[0].like;
    return store.dispatch(incLike(1))
    .then((data) => expect(data.metadata.like).toEqual(prevLike + 1));
  });
});
