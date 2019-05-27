import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Navbar from './NavbarPage'
import history from './history'
import { LandingPage } from './Components'

function App() {
  return (
    <Router history={history}>
    <div>
      <Navbar />
        <Switch>
          <Route path ='/' component={LandingPage}/>
        </Switch>
    </div>
  </Router>
  )
}

export default App