import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';
import {
  Core,
  FeedRoutes,
  ProfileRoutes
} from './modules';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

export const Routes = (
  <Router history={history}>
    <Route path="/" component={Core}>
      {FeedRoutes}
      {ProfileRoutes}
    </Route>
  </Router>
);
