/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Radio } from '@alifd/next';

import './index.scss';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

class Login extends Component {
  static displayName = 'Login';

  state = {
    code: '',
    second: 60,
  }

handleSubmit = (values, errors) => {
  if (errors) {
    return;
  }

  this.props.history.push('./app/index');

  console.log('Get form value:', values);
};


render() {
  return (
    <div >
      <Form className="login" labelTextAlign="left" size="large" labelAlign="inset" >
        <FormItem label="name" required asterisk={false}>
          <Input name="username" trim defaultValue="frank" />
        </FormItem>
        <FormItem label="password" required asterisk={false}>
          <Input name="password" type="password" trim defaultValue="frank" />
        </FormItem>

        <FormItem label=" ">
          <Form.Submit style={{ width: '100%' }} type="primary" validate onClick={this.handleSubmit}>登录</Form.Submit>
        </FormItem>
      </Form>
    </div>
  );
}
}

export default Login;
