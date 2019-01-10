import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import { path } from './config';

import App from './App';
import Home from './views/Home';
import Page404 from './views/Page404';
import About from './views/About';

export default class Router extends React.Component {
  render() {
    return (
      <ReactRouter basename={path}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={Page404} />
          </Switch>
        </App>
      </ReactRouter>
    );
  }
}
