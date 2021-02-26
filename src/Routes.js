import { LinearProgress } from "@material-ui/core";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "views/Homepage/Home";
import Components from "views/Components/Components.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import Success from 'components/stripe/success'
import Failure from 'components/stripe/failure'
import Auction from 'views/Auction'
import Sell from 'views/Sell'
import Buy from "views/Buy/Buy";
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  "ASUCCYGC0G",
  "0cde706d63c7a3879f8df93bc62c6266"
);

const renderRoutes = (user) => (
  <InstantSearch indexName="dev_DATASET" searchClient={searchClient}>
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
        <Route
          path="/auction"
          exact
          render={props => (
            <Auction user={user} />
          )}
        />
        <Route path="/buy" exact render={(props) => <Buy user={user} />} />
        <Route
          path="/sell"
          exact
          render={props => (
            <Sell user={user} />
          )}
        />
      </Switch>
    </Suspense>
  </InstantSearch>
);

function Routes({ user }) {
  return renderRoutes(user);
}

export default Routes;
