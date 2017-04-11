import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import store from 'components/redux/store';
import routes from 'routes';
import prepareData from 'helpers/PrepareData';
import { compact } from 'lodash/array';

export default (req,res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) =>
  {
    // if (renderProps) {
      return Promise.all(compact(prepareData(store, renderProps))).then(() => {
        const initialState = JSON.stringify(store.getState());
        const content = ReactDomServer.renderToString(
          React.createElement(
            Provider,
            { store },
            React.createElement(RouterContext, renderProps)
          )
        );

        res.status(200);
        res.render('index', { initialState, content });
      });
    // }
  }
  );
};
