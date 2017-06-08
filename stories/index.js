import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Welcome from './Welcome';
import PaginationContainer from '../src/containers/PaginationContainer';
import PostContainer from '../src/containers/PostContainer';
import createStore from '../src/components/redux/store';
import { fetchPost } from '../src/components/redux/actions/Post';
import { Provider } from 'react-redux';

storiesOf('Welcome', module).add('to Storybook',
() => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text',
  () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji',
  () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const store = createStore();
store.dispatch(fetchPost(1));

storiesOf('PaginationContainer', module)
    .add('pagination', () => <PaginationContainer
    store={store}
    />);

storiesOf('PostContainer', module)
    .add('Post', () => <Provider store={store}>
    <PostContainer/>
    </Provider>
  );
