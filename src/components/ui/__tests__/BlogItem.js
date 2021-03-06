import React from 'react';
import ReactDOM from 'react-dom';
import BlogItem from '../BlogItem';
import { Provider } from 'react-redux';
import  { testStore } from 'helpers/test/testStore';

describe('BlogItem', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    const item = { image: {}, metadata: {}, id: 3, txt: 'text' };
    const store = testStore({
      likes: [{id: 3, like: 10}],
      isFetching: false,
      like: 0
    }, {id: 3});

    ReactDOM.render(<Provider store={store}>
                      <BlogItem item={item} linkToBlog="/posts/3"/>
                    </Provider>, div);
  });
});
