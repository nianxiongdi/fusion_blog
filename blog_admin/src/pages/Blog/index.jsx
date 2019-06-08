
import React from 'react';
import ReactDOM from 'react-dom';

import { publish } from '../../redux/blog.redux';
import axios from 'axios';
import {
  Input,
  Button,
  Select,
  Grid,
} from '@alifd/next';
import { connect } from 'react-redux';

import './index.scss';

const { Row, Col } = Grid;
const { Option } = Select;

@connect(
  state => state.blog,
  { publish }
)
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      summary: '',
      content: '',
      tags: '',
      catalog_id: 0,
      catalogData: '',
      user_id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.getCatalogList = this.getCatalogList.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    this.getCatalogList();
  }
  handleChange(value, event) {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit() {
    this.props.publish(this.state);
    this.setState({
      title: '',
      summary: '',
      content: '',
      tags: '',
    });
  }
  handleContent(obj) {
    this.setState({
      content: obj,
    });
  }
  getCatalogList() {
    axios.get('/api/catalog')
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          this.setState({
            catalogData: res.data.data.rows,
            catalog_id: res.data.data.rows[0].id,

          });
        } else {

        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleSelect(value) {
    this.setState({
      catalog_id: value,
    });
  }
  render() {
    const { TextArea } = Input;
    return (
      <div className="publish">
        <header className="publish-header">
          <h1>发表博客</h1>
        </header>
        <Row type="flex" justify="center">
          <Col xs={20} sm={16} md={16} lg={16} xl={16}>
            <div className="publish-input">
              <Input
                addonTextBefore="标题"
                size="large"
                placeholder="文章标题"
                name="title"
                style={{ width: 1000 }}
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="publish-input">
              <TextArea
                rows={2}
                style={{ width: 1000 }}
                placeholder="文章摘要"
                name="summary"
                value={this.state.summary}
                onChange={this.handleChange}
              />
            </div>
            <div className="publish-input">
              <TextArea
                rows={12}
                style={{ width: 1000 }}
                placeholder="文章内容 markdown格式"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
              />
            </div>
            <div className="publish-input">
              <Input
                addonTextBefore="标签"
                size="large"
                placeholder="文章标签"
                name="tags"
                style={{ width: 1000 }}
                value={this.state.tags}
                onChange={this.handleChange}
              />
            </div>
            <div className="publish-input">
              <span>分类：</span>
              {this.state.catalogData ?
                <Select
                  defaultValue={this.state.catalogData[0].name}
                  onChange={this.handleSelect}
                >
                  {
                    this.state.catalogData.map(v => (
                      <Option value={v.id} key={v.id}>
                        {v.name}
                      </Option>
                    ))
                  }
                </Select>
                : null}
            </div>
            <div className="publish-input">
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
      </div>
    );
  }
}

export default Blog;
