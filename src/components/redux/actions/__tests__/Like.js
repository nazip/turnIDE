import  createStore  from 'components/redux/store';
import { incLike } from '../Like';
import { fetchPost } from '../Post';

describe('Like action', () => {
  const store = createStore();

  it('add like', () => {
    expect.assertions(1);
    let prevLike = 0;
    store.dispatch(fetchPost(1))
    .then((data) => prevLike = data.metadata.like);
    return store.dispatch(incLike(1))
    .then((data) => expect(data.metadata.like).toEqual(prevLike + 1));
  });
});
