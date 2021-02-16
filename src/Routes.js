import { LinearProgress } from '@material-ui/core';
import React, {Suspense} from 'react';
import {Route, Router, Switch, } from 'react-router-dom'
import Home from 'views/Homepage/Home'

const renderRoutes = () => (
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <Home {...props} />
        )}
      />
    </Switch>
  </Suspense>
);

function Routes() {
  return renderRoutes();
}


export default Routes;