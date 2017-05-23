import './src/static/css/main.css';
import './node_modules/semantic-ui/dist/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';

import { AppContainer } from 'react-hot-loader';

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./src/components/App', () => {
    const NextApp = require('./src/components/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      rootEl
    );
  });
}
