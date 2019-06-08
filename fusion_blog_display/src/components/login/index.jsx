import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field, Message } from '@alifd/next';

import { connect } from 'react-redux'
import { loginSuccess, loginFailure } from '../../redux/user.redux'
import Cookies from 'js-cookie'
import axios from 'axios'

const FormItem = Form.Item;

@connect(
  state => state.user,
  { loginSuccess, loginFailure }
)
export default class Login extends Component {
  static displayName = 'Login';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      dataIndex: null,
    };
    this.field = new Field(this);
  }

  handleSubmit = () => {
    this.field.validate((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      //   withCredentials: true // 允许携带cookie
      axios.post('/api/users/login',{
        ...values
      }, {withCredentials: true}).then(res =>{
        console.log(res);
        if(res.status === 200 && res.data.code === 0){
          //　设置
          Cookies.set('username', values.username, {
            expires: 1/24,
            path: '/'
          })
          Message.success(res.data.msg);

          this.props.closed();
        }else {
          Message.error(res.data.msg);
        }
      })

    });
  };

  render() {
    const init = this.field.init;
    const { visible, closed } = this.props;
    console.log(visible);
    const formItemLayout = {
      labelCol: {
        fixedSpan: 6,
      },
      wrapperCol: {
        span: 14,
      },
    };

    return (
      // <div style={styles.editDialog}>
      <div>
        {/* <Button type="primary" onClick={() => this.onOpen(index, record)}>
          编辑
        </Button> */}
        <Dialog
          autoFocus
          style={{ width: 640 }}
          visible={visible}
          onOk={this.handleSubmit}
          closeable="esc,mask,close"
          onCancel={closed}
          onClose={closed}
          title="登录"
        >
          <Form field={this.field}>
            <FormItem label="username：" {...formItemLayout}>
              <Input
                {...init('username', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>

            <FormItem label="password：" {...formItemLayout}>
              <Input
                {...init('password', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
          </Form>
        </Dialog>
      </div>
    );
  }
}

const styles = {
  editDialog: {
    display: 'inline-block',
    marginRight: '5px',
  },
};
