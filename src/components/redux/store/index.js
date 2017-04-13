import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'components/redux/reducers';
import API from 'components/redux/middleware/API';
import DevTools from 'containers/DevTools';

const store = (initialState) =>  createStore(
  initialState,
  reducers,
  compose(applyMiddleware(API),
          DevTools.instrument()));

export default store;
