import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import RouteList from '../components/route-list';
import routes from '../routerConfig';
import Auth from '../components/Auth';

export default () => (

  // <Router>
  //   <Switch>
  //     <Route exact path="/" component={Header}/>
  //    </Switch>
  // </Router>
  <Router>
    <div>
      <Auth />
      <RouteList routes={routes} />
    </div>
  </Router>
);

