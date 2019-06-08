
import React from 'react'
import ReactDOM from 'react-dom'


import {
  Grid,
  Card,
  Icon
} from '@alifd/next';
import './index.scss'

const {  Row, Col } = Grid;

class About extends React.Component {


  componentDidMount() {
    document.title = 'Water Blog'
  }
  render() {
    return (
      <div>
        <Row>
        <Col
            lg={{ span: 15, offset: 1 }}
            md={{ span: 15, offset: 1 }}
            xs={{ span: 24 }}
            className="about-wrapper"
          >
            <Card
              title="关于我"
              style={{marginBottom: 20}}
            >
              <div className="content">
                <p>
                  默默的写写代码,感谢每一个帮助我的人,感谢~~~
                </p>
                <p style={{marginTop: 20}}>

                </p>
                <p style={{marginTop: 20}}>
                  脚踏实地,你是最好滴{'>_<'}
                </p>
              </div>
            </Card>
            <Card
              title="联系我"
            >
              <div className="content">
                <p>
                  <Icon type="mail" /> 邮箱：nianxiongdi@163.com
                </p>
                <p style={{marginTop: 20}}>
                  <Icon type="github" /> Github：<a href="https://github.com/nianxiongdi" target="_blank" rel="noopener noreferrer">xianxiongdi</a>
                </p>
                <p style={{marginTop: 20}}>
                  <Icon type="github" /> CSDN：<a href="https://blog.csdn.net/qq_30638831" target="_blank" rel="noopener noreferrer">醉小义</a>
                </p>
              </div>
            </Card>
          </Col>
          <Col
            lg={{ span: 6, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            xs={{ span: 0 }}
          >
          </Col>
        </Row>
      </div>
    )
  }


}

export default About;
