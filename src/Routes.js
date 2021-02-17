import { LinearProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Route, Switch, } from 'react-router-dom'
import Home from 'views/Homepage/Home'
import Components from "views/Components/Components.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import Success from 'components/stripe/success'
import Failure from 'components/stripe/failure'

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
      <Route
        path="/profile-page"
        exact
        render={props => (
          <ProfilePage />
        )}
      />
      <Route
        path="/success"
        exact
        render={props => (
          <Success />
        )}
      />
      <Route
        path="/canceled"
        exact
        render={props => (
          <Failure />
        )}
      />
    </Switch>
  </Suspense>
);

function Routes({ user }) {
  return renderRoutes(user);
}


export default Routes;