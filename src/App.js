import React, { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Route";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { auth } from "./firebase";
const history = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#025955'
    },
    secondary: {
      main: '#03AE86'
    }
  }
});

export default function App() {
  const [currentUser, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      // console.log('user', user)
    });

    require("dotenv").config();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Routes user={currentUser} />
      </Router>
    </MuiThemeProvider>
  );
}
