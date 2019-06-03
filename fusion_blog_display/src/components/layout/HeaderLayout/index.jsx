'use strict';

import React from 'react';
import Header from '../../header/index';
import Sider from '../../sider'
import './index.scss';

class Layout extends React.Component {

  render() {
    console.log(this.props.match.path);
    return (
      <div className="header-layout">
        <Header {...this.props} />
        <div className="body">
          <div id="main" className="main" style={{
            width: !this.props.match.path.includes('detail') ? '70%': '60%'
          }}>
            {this.props.children}
          </div>
          {
            !this.props.match.path.includes('detail') ?
               <Sider id="sider" className="sider" {...this.props} />
            : ''
          }
        </div>
       </div>
    );
  }
}

export default Layout;
