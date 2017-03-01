import React from 'react';
import  ReactDOM from 'react-dom';
import routes from 'routes';
import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';
import store from 'components/store';
import DevTools  from 'containers/DevTools';
import prepareData from 'helpers/PrepareData';

function listenBeforeCb(location) {
  match({location, routes}, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });
  return true;
}

browserHistory.listenBefore(listenBeforeCb);
listenBeforeCb(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
);

ReactDOM.render(<DevTools store={store}/>, document.getElementById('devtools'));


export default App;
