import * as React from 'react';
import axios from "axios"

// interface IState {
//   user_name:String,
//   user_pwd:String

// }
class Login extends React.Component {
  public state = {
    user_name: "",
    user_pwd: ""
  }
  public render() {

    return (
      <div>
        <p>用户名<input type="text" value={this.state.user_name} onChange={this.handleUser} /></p>
        <p>密码<input type="text" value={this.state.user_pwd} onChange={this.handlePwd} /></p>
        <p><button onClick={this.handleLogin}>登录</button></p>
      </div>
    );
  }
  /**
   * handleLogin
   */
  public handleLogin = () => {
    console.log(this.state.user_pwd, this.state.user_name)
    axios.post("/user/login", { user_name: this.state.user_name, user_pwd: this.state.user_pwd }).then(res => {
      if (res.data.code === 1) {
        alert(res.data.msg)
        // this.props.history.push("/home")
      }
    })
  }
  /**
   * handleUser
   */
  public handleUser = (e: any) => {
    this.setState({
      user_name: e.target.value
    })
  }
  /**
   * handlePwd
   */
  public handlePwd = (e: any) => {
    this.setState({
      user_pwd: e.target.value
    })
  }
  
}

export default Login;

