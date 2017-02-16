import React from 'react';
import routes from 'routes';
import { Router, browserHistory } from 'react-router';

const App = () => (
  <Router history={browserHistory} routes={routes}/>
);

export default App;
