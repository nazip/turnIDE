// import './main.scss'; // attach foundation
import './node_modules/semantic-ui/dist/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/app';

import { AppContainer } from 'react-hot-loader';

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./src/components/app', () => {
    const NextApp = require('./src/components/app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      rootEl
    );
  });
}
