import React from 'react';
import ReactDOM from 'react-dom';
import BlogItem from '../BlogItem';
// import PropTypes from 'prop-types';
import Img from 'components/elements/Img';
// import MetaData from 'components/ui/MetaData';
// import { Header, Grid } from 'semantic-ui-react';
import Link from 'components/elements/Link';
// import LikeContainer from 'containers/LikeContainer';
import createStore from 'components/redux/store';
import { Provider } from 'react-redux';

describe('BlogItem', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    const item = { image: {}, metadata: {}, id: 3, txt: 'text' };
    const store = createStore(
      {likes: {likes: [], isFetching: false, error: false}});
    ReactDOM.render(<Provider store={store}>
                      <BlogItem item={item} linkToBlog="/posts/3"/>
                    </Provider>
                      , div);
  });
});
