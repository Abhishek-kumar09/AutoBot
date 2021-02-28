import { LinearProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Route, Switch, } from 'react-router-dom'
import Home from 'views/Homepage/Home'
import Components from "views/Components/Components.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import Success from 'components/stripe/success'
import Failure from 'components/stripe/failure'
import Auction from 'views/Auction'
import Buy from "views/Buy/Buy";
import Sell from 'views/Sell'
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import Learn from 'components/Learn';

const searchClient = algoliasearch(
  "ASUCCYGC0G",
  "0cde706d63c7a3879f8df93bc62c6266"
);


const renderRoutes = (user) => (
  <Suspense fallback={<LinearProgress />}>
    <InstantSearch indexName="Prod_dataset" searchClient={searchClient}>
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
        <Route
          path="/auction"
          exact
          render={props => (
            <Auction user={user} />
          )}
        />
        <Route
          path="/sell"
          exact
          render={props => (
            <Sell user={user} />
          )}
        />
        <Route
          path="/learn"
          exact
          render={props => (
            <Learn user={user} />
          )}
        />
        <Route path="/buy" exact render={(props) => <Buy user={user} />} />
      </Switch>
    </InstantSearch>
  </Suspense>
);

function Routes({ user }) {
  return renderRoutes(user);
}


export default Routes;