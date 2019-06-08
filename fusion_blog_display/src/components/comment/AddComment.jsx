import React from 'react'
import {
  Card,
  Input,
  Button,
  Message } from '@alifd/next';
import Cookies from 'js-cookie'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// createComment

import './index.scss'
@withRouter
@connect(
  state => state
)
class AddComment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(value, event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit() {
    if(!this.state.content) {
      Message.error('请先输入内容')
    } else if(!Cookies.get("token")) {
      Message.error('请先登录')
    } else {
      const blog_id = this.props.match.params.id
      const user_id = Cookies.get('user_id')
      // console.log(user_id);
      const username = Cookies.get('username')
      const content = this.state.content
      // console.log(username)
      // console.log('+++++++++')
      this.props.createComment({
        blog_id,
        user_id,
        content,
        username
      })
      this.setState({
        content: ''
      })
    }
  }
  render() {
    // contentHeight="auto" 隐藏card的收起
    return (
      <Card title="评论"
        style={{width: 1000}}
        contentHeight="auto">
        <div className="comment-input">
          <Input.TextArea
            style={{width: 860}}
            rows={6}
            value={this.state.content}
            ref={(textarea) => this.textarea = textarea}
            onChange={this.handleChange}
          />
        </div>
        <div className="comment-submit">
          <Button
            type="primary"
            onClick={this.handleSubmit}
          >
            发布
          </Button>
        </div>
      </Card>
    )
  }


}


export default AddComment;
