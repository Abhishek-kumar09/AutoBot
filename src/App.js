import React, { useEffect, useState } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Routes from './Routes'

import {auth, } from './firebase'
const history = createBrowserHistory();

export default function App() {

  const [currentUser, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
      // console.log('user', user)
    });
  }, [])

  return (
    <Router history={history}>
      <Routes user={currentUser}/>
    </Router>
  )
}