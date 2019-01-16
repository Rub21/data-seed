import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import config from './config';
import Router from './Router';
import configureStore from './store';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

/* eslint-disable no-console */
console.log.apply(console, config.consoleMessage);
console.log('Environment', config.environment);
