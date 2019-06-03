import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import RouteList from '../components/route-list'
import routes from '../routerConfig';

export default () => (

  // <Router>
  //   <Switch>
  //     <Route exact path="/" component={Header}/>
  //    </Switch>
  // </Router>
  <Router>
    <RouteList routes={routes} />
  </Router>
)



