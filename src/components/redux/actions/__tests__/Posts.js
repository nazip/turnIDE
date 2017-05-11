import { fetchPosts } from 'components/redux/actions/Posts';
import  createStore  from 'components/redux/store';

describe('Posts reducer', () => {
  const store = createStore();

  it('fetch Posts', () => {
    expect.assertions(1);
    return store.dispatch(fetchPosts())
    .then((data) =>  expect(data.entries.length > 0).toEqual(true));
  });
});
