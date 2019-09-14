import * as React from "react";
import { Layout, Select, Menu, Dropdown, Avatar, Modal, message, Input, Form, Icon, Upload } from 'antd';
import { inject, observer } from 'mobx-react'
import "./scss/header.css"
const { Option } = Select;
const { Header } = Layout;
interface propsInfo {
  global?: any,
  history: any,
  classType: any,
  form: any,
  login: any,
  user:any
}
@inject("global", 'login','user')
@observer

export class Head extends React.Component<propsInfo> {
  state = {
    langList: [
      {
        locale: "zh",
        title: "中文"
      },
      {
        locale: "en",
        title: "英文"
      }
    ],
    menu: (
      <Menu>
        <Menu.Item>
          <span onClick={() => {
            this.showModal()
          }} >个人中心</span>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            我的班级
                </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            设置
                </a>
        </Menu.Item>

        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            退出登录
                </a>
        </Menu.Item>
      </Menu>
    ),
    visible: false,
    confirmLoading: false,
    user_name: '',
    user_id: '',
    avatar: '',
    identity_id: ''
  }
  constructor(props: any) {
    super(props)
    this.handleUserMsg()
  }

  handleChange = (value: any) => {
    this.props.global.changeLocale(value)
  }
  handleUserMsg = async () => {
    let result = await this.props.login.getUserInfoAction()
    let data= await this.props.user.getUserList()
    let { avatar, identity_id, user_id, user_name } = result.data
    this.setState({ avatar, identity_id, user_id, user_name })
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        let  avatar=values.avatar.file.response.data[0].path
        let {user_id,user_name,user_pwd,identity_id}=values
        let result = await this.props.user.updateUserInfoAction({user_id,user_name,user_pwd,identity_id,avatar})
       if(result.code===1){
        message.success(result.msg)
        this.handleCancel()
       }
       
      }
    })
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleFileChange=(info:any)=>{
    if (info.file.status === "done"){
      // 上传成功
      this.props.user.changeAvatar(info.file.response.data[0].path);
    }else if(info.file.status === "uploading"){
      // 做上传进度条
      console.log('percent....', info.file.percent);
    }
  }
  beforeUpload():boolean{
        return true
  }
  public render() {
    const { langList, menu, visible, confirmLoading, identity_id, user_id, user_name } = this.state
    const { getFieldDecorator } = this.props.form;
    const {avatar,userInfo}=this.props.user
    const uploadButton = (
      <div>
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <Header className="header" >
        <div className="header-img" style={{ width: "120px", height: "31px", margin: "15px 50px", textAlign: 'center', lineHeight: "31px" }} >
          <img style={{ width: "120px", height: "28px" }} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
        </div>
        <div className="header-lang">
          选择语言：
                <Select defaultValue="中文" onChange={this.handleChange}>
            {langList.map((item: any, index: number) => <Option value={item.locale} key={index}>{item.title}</Option>)}

          </Select>
        </div>
        <div className="header-msg" >
          <Dropdown overlay={menu} placement="bottomCenter"  >
            <span>   <Avatar size="large" src={userInfo.avatar} style={{ marginRight: "5px" }} />  {user_name}</span>
          </Dropdown>
        </div>
        <Modal
          title="上传头像"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          cancelText="取消"
          okText="确定上传"
          okType="primary"
        >
          <Form.Item label="用户头像">
            {getFieldDecorator('avatar', {
            })(<Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              action="http://123.206.55.50:11000/upload"
              showUploadList={false}
              beforeUpload={this.beforeUpload}
              onChange={this.handleFileChange}
            >
              {avatar ? <img src={avatar} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>)}
          </Form.Item>
          <Form.Item label="identity_id">
            {getFieldDecorator('identity_id', {
              initialValue: identity_id,
              rules: [{ required: true, message: 'Userquestions Identity_id!' }],
            })(
              <Input
                prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />}
                disabled={true}
              />
            )}
          </Form.Item>
          <Form.Item label="用户id">
            {getFieldDecorator('user_id', {
              initialValue: user_id,
              rules: [{ required: true, message: 'Userquestions User_id!' }],
            })(
              <Input
                prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />}
                disabled={true}
              />
            )}
          </Form.Item>
          <Form.Item label="用户名">
            {getFieldDecorator('user_name', {
              initialValue: user_name,
              rules: [{ required: true, message: 'Userquestions UserName!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
              />
            )}
          </Form.Item>
          <Form.Item label="密码">
            {getFieldDecorator('user_pwd', {
              rules: [{ required: true, message: 'Userquestions User_Pwd!' }],
            })(
              <Input
                prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
              
              />
            )}
          </Form.Item>


        </Modal>
      </Header>
    )
  }
}

export default Form.create({ name: 'classRoom' })(Head)


