import 'babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import createHistory from 'history/lib/createBrowserHistory';

import configureStore from './store/configureStore';
import routes from './routes';

const history = createHistory();
const store = configureStore();


render(
  (<Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>),
  document.getElementById('root')
);
