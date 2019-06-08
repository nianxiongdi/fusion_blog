import React from 'react';
import {
  Grid,
  Button,
  Input,
  message,
} from '@alifd/next';

import axios from 'axios';

import './index.scss';

const { Row, Col } = Grid;
class CollectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      date: '',
      link: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit() {
    axios.post('/api/collect', this.state)
      .then((res) => {
        if (res.status === 201 && res.data.code === 0) {
          message.success(res.data.msg);
          this.setState({
            title: '',
            author: '',
            date: '',
            link: '',
          });
        } else {
          message.error(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <Row justify="center">
        <Col span={14}>
          <header className="new-collect-header">
            <h1>添加收藏</h1>
          </header>
          <div className="new-collect-input">
            <Input
              addonTextBefore="标题"
              size="large"
              placeholder=""
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="new-collect-input">
            <Input
              addonTextBefore="作者"
              size="large"
              placeholder=""
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </div>
          <div className="new-collect-input">
            <Input
              addonTextBefore="链接"
              size="large"
              placeholder=""
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
            />
          </div>
          <div className="new-collect-input">
            <Input
              addonTextBefore="时间"
              size="large"
              placeholder=""
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <div className="new-collect-input">
            <Button
              type="primary"
              size="large"
              icon="check-circle-o"
              style={{ float: 'right' }}
              onClick={this.handleSubmit}
            >
              发布
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default CollectNew;

