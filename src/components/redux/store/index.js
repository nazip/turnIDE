import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'components/redux/reducers';
import DevTools from 'containers/DevTools';

const store = createStore(reducers,
  compose(applyMiddleware(thunk),
          DevTools.instrument()));

export default store;