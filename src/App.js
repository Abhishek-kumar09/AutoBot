import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Routes from './Routes'

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}