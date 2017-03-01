import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from 'components/reducers';
import DevTools from 'containers/DevTools';

const store = createStore(reducers,
  compose(applyMiddleware(thunk, logger),
          DevTools.instrument()));

export default store;
