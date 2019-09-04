import * as React from 'react';
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { inject, observer } from 'mobx-react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./scss/style.css"

interface PropsInfo {
  props: any,
  history: any,
  user: any,
  form: WrappedFormUtils
}


@inject('user')
@observer

class Login extends React.Component<PropsInfo> {
  public state = {
    user_name: "",
    user_pwd: ""
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields(async (err: Error, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const result = await this.props.user.login({ user_name: values.username, user_pwd: values.password })
        if(result===1){
          this.props.history.push("/home")
        }
      }
    });
  };
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              validateTrigger:'onBlur',
              rules: [{
                validator:(ruler,value,callback)=>{
                  console.log("value...",value);
                  if(/[a-z]{5,20}/.test(value)){
                    callback()
                  }else{
                    callback('Please input valid username!')
                  }
                }
              }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              validateTrigger:"onBlur",
              rules: [{
                validator:(ruler,value,callback)=>{
                  console.log(value,"0000")
                  if(/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)){
                    callback()
                  }else{
                    callback("Please input valid password!")
                  }
                }
              }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
          </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
             登陆
          </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'normal_login' })(Login)


