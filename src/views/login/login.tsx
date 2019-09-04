import * as React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {WrappedFormUtils} from 'antd/lib/form/Form'
import {inject, observer} from 'mobx-react'
import "../../assets/login/index.css"

interface PropsInfo{
    history:any,
    form:WrappedFormUtils,
    login:any
}


@inject('login')
@observer

export class Login extends React.Component<PropsInfo> {
    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields(async(err:Error, values:any) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const result = await this.props.login.login(values);
            if(result===1){
              this.props.history.replace("/main")
            }else{
              alert("登陆失败")
            }
          }
        });
      };
    
   public  render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div className='login-wrapper'>          
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
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
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
        );
      }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm
