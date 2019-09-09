import * as React from 'react'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import {WrappedFormUtils} from 'antd/lib/form/Form'
import {inject, observer} from 'mobx-react'
import "./scss/index.css"
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
            const {code,msg} = await this.props.login.login(values);
            if(code===1){
              this.props.history.replace("/main")
            }else{
              message.error(msg||'用户名或密码错误')
            }
          }
        });
      };
    
   public  render() {
        const { getFieldDecorator } = this.props.form;
        //从仓库中取user_name,user_pwd的值 并赋值给input的默认值
        const {user_name,user_pwd} =this.props.login.account;
        return (
        <div className='login-wrapper'>          
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('user_name', {
                   validateTrigger: 'onBlur',
                   //给user_name设置默认值为本地存储中的user_name
                   initialValue: user_name,
                rules: [{ validator: (ruler, value, callback)=>{
                  console.log('value...', value);
                  if (/[a-z]{5,20}/.test(value)){
                    callback();
                  }else{
                    callback('Please input valid username!')
                  }
                }}],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('user_pwd', {
                   validateTrigger: 'onBlur',
                   initialValue: user_pwd,
                rules: [{ validator: (ruler, value, callback)=>{
                  console.log('value...', value);
                  if (/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)){
                    callback();
                  }else{
                    callback('Please input valid password!')
                  }
                }}],
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
              })(<Checkbox>Auto login in theven days</Checkbox>)}
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
