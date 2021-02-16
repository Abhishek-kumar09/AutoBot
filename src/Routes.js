import { LinearProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Route, Switch, } from 'react-router-dom'
import Home from 'views/Homepage/Home'
import Components from "views/Components/Components.js";
import LoginPage from "views/LoginPage/LoginPage.js";


const renderRoutes = (user) => (
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <Home user={user} {...props} />
        )}
      />
      <Route
        path="/components"
        exact
        render={props => (
          <Components {...props} />
        )}
      />
      <Route
        path="/login"
        exact
        render={props => (
          <LoginPage {...props} />
        )}
      />
    </Switch>
  </Suspense>
);

function Routes({user}) {
  return renderRoutes(user);
}


export default Routes;