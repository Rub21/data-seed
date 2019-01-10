import React from 'react';
import { BrowserRouter as ReactRouter, Route } from 'react-router-dom';
import { path } from './config';

import App from './App';
import Home from './views/Home';

export default class Router extends React.Component {
  render() {
    return (
      <ReactRouter basename={path}>
        <App>
          <Route exact path="/" component={Home} />
        </App>
      </ReactRouter>
    );
  }
}
