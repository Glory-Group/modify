import * as React from 'react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { inject, observer } from 'mobx-react';
import {History} from "history/index";
import { Form, Icon, Input, Button, Checkbox , message } from 'antd';
import "./scss/style.css"

interface PropsInfo {
  props: any,
  history: History,
  user: any,
  form: WrappedFormUtils
}


@inject('user')
@observer

class Login extends React.Component<PropsInfo> {
  constructor(props:PropsInfo){
    super(props)
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields(async (err: Error, values: any) => {
      if (!err) {
        const {code,msg} = await this.props.user.login(values)
        if( code ===1){
          //跳转到主页
          this.props.history.push("/home")
        }else{
          message.error(msg||'密码或用户名错误')
        }
      }
    });
  };
  public render() {
    //表单验证的高阶组件
    const { getFieldDecorator } = this.props.form;
    const {user_name,user_pwd}=this.props.user.account
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('user_name', {
              validateTrigger:'onBlur',
              initialValue:user_name,
              rules: [{
                validator:(ruler,value,callback)=>{
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
            {getFieldDecorator('user_pwd', {
              validateTrigger:"onBlur",
              initialValue:user_pwd,
              rules: [{
                validator:(ruler,value,callback)=>{
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
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('autoLogin', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Auto login in 7 days</Checkbox>)}
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


