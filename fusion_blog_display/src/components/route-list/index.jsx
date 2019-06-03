'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch,Redirect } from 'react-router-dom';

class RouteList extends React.Component {
  static propTypes = {
    /**
     * route 列表
     */
    routes: PropTypes.array,
  };

  render() {
    const { routes } = this.props;
    console.log('--RouteList--')
    console.log( this.props);
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/index" push />} />

        {routes.map(route => (
          <Route
            exact={route.exact}
            key={route.path}
            path={route.path}
            render={props => {
              const component = React.createElement(route.component, props);
              if (route.layout) {
                return React.createElement(route.layout, props, component);
              }
              return component;
            }}
          />
        ))}
      </Switch>
    );
  }
}

export default RouteList;
