import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Home from './views/Home';
import Page404 from './views/Page404';

export default class RouterComponent extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    );
  }
}
