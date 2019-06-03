import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, Grid } from '@alifd/next';
const { Row, Col } = Grid;

import './index.scss'
class Sider extends React.Component {

  render() {
    return (<div {...this.props}  >
      <div>
        <Card className="image-card" contentHeight="auto">
          <img src="https://s2.ax1x.com/2019/06/01/V3HHVx.png" alt="father day" className="img"  />
          <div className="custom-card">
              <h3>千于</h3>
              <p>水滴石穿,非一日之功~~~</p>
          </div>
        </Card>
      </div>

      <div>
        <Card className="title" contentHeight="auto">
          <h2>最近文章</h2>
          <div className="helpers-line"  />

          <span style={{display: "block",  margin: '8px 0'}}>
            大话西游新种族
          </span>
        </Card>
      </div>

      <div>
        <Card className="title" contentHeight="auto">
          <h2>标签</h2>
          <div className="helpers-line"  />
          <span style={{display: "block",padding: '8px 0'}}>
            仙族
          </span>
        </Card>
      </div>



    </div>);
  }

}


export default Sider;
