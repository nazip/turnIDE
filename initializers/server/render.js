import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import routes from 'routes';
import prepareData from 'helpers/PrepareData';
import createStore  from 'components/redux/store';
import { compact } from 'lodash/array';

const store = createStore();

export default (req,res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) =>
  {
    if (renderProps === undefined) return res.sendStatus(404);
    return Promise.all(compact(prepareData(store, renderProps))).then(() => {
      const initialState = JSON.stringify(store.getState());
      const content = ReactDomServer.renderToString(
        React.createElement(
          Provider,
          {store},
          React.createElement(RouterContext, renderProps)
        )
      );
      res.status(200);
      res.render('index', { initialState, content });
    })
    .catch(error => console.log(error));
  }
  );
};
