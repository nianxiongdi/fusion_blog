'use strict';

import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../header';
import SideMenu from '../../side-menu/index';
// import classNames from 'classnames';
import { asideMenuConfig } from '../../../menuConfig';

import './index.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="header-aside-footer-layout">
        <SideMenu dataSource={asideMenuConfig} className="aside" />

        <div className="body">
          <Header className="header" />

          <div className="main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
