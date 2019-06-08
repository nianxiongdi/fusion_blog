import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookeis from 'js-cookie';

@withRouter
class Auth extends Component {
  componentDidMount() {
    const routePath = ['/login'];
    const currentPath = this.props.location.pathname;
    if (routePath.indexOf[currentPath] > -1) {
      return null;
    }
    setTimeout(() => {
      const cookie = Cookeis.get('token');
      if (!cookie) {
        this.props.history.push('/login');
      }
    }, 0);
  }
  render() {
    return (
      <div />
    );
  }
}

export default Auth;
