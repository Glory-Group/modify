import * as React from 'react'
import { Button, Radio, Input, Select, message } from 'antd';
import { inject, observer } from 'mobx-react'
import "./scss/index.css"
const { Option } = Select

interface PropsInfo {
    user: any
}

@inject('user')
@observer


export class AddUser extends React.Component<PropsInfo> {
    state = {
        size: 'large',
        identify: 'large',
        api: 'large',
        isShow: false,
        identityList: [],
        userList: [],
        api_authorityList: [],
        view_authorityList: [],
        user_name: '',//用户名
        user_pwd: '',//密码
        identity_id: '',//身份id,
        identity_text: '',//身份名称
        view_authority_id:'',//试图权限id
        api_authority_id:'',//api接口id
        defaultUser: "",
        defaultPwd: "",
        defaultId: "请选择身份id",
        view_authority_text:'',//视图权限名称
    };
    constructor(props: any) {
        super(props)
        this.handleGetList()
    }
    //getList
    handleGetList = async () => {
        let result = await this.props.user.getTabAction("/user/identity");
        let data = await this.props.user.getTabAction("/user/user");
        let api_authority = await this.props.user.getTabAction("/user/api_authority");
        let view_authority = await this.props.user.getTabAction("/user/view_authority");
        this.setState({ identityList: result.data, userList: data.data, api_authorityList: api_authority.data, view_authorityList: view_authority.data })
    }
    //用户
    handleSizeChange = async (e: any) => {
        this.setState({ size: e.target.value });
        this.setState({ isShow: !this.state.isShow })

    };
    //handleUser
    handleUser = (e: any) => {
        if (e.target) {
            let type = e.target.name
            this.setState({ [type]: e.target.value })
        } else {
            let {val,type}=e
            this.setState({ [type]:val })
        }

    }
    //addType
    addType = async (type: string) => {
        let { user_name, user_pwd, identity_id,  view_authority_text, view_authorityList, identity_text } = this.state
        if (type === 'addUser') {
            let userResult = await this.props.user.addListAction("/user", { user_name, user_pwd, identity_id })
            if (userResult.code === 1) {
                message.success(userResult.msg)
                message.success(userResult.msg)
            } else {
                message.error(userResult.msg)
            }
        } else if (type === 'authorityView') {
            let authView = await this.props.user.addTypeAction("/user/authorityView/edit", { view_authority_text, view_id: view_authorityList.length })
            if (authView.code === 1) {
                message.success(authView.msg)
                this.handleGetList()
            } else {
                message.error(authView.msg)
            }
        } else if (type === 'addIdentity') {
            let identityText = await this.props.user.addTypeAction("/user/identity/edit", { identity_text })
            if (identityText.code === 1) {
                message.success(identityText.msg)
                this.handleGetList()
            } else {
                message.error(identityText.msg)
            }
        }
      

    }
    //setType
    setType= async (type:string)=>{
        let {identity_id,view_authority_id,api_authority_id}=this.state
        if(type ==='setIdentity'){
            let setIdentity = await this.props.user.setTypeAction("/user/setIdentityView",{identity_id,view_authority_id})
            if(setIdentity.code===1){
                message.success(setIdentity.msg)
                this.handleGetList()
            }else{
                message.error(setIdentity.msg)
            }
        }else if(type==='setIdentityApi'){
  
            let setIdentityApi = await this.props.user.setTypeAction("/user/setIdentityApi",{identity_id,api_authority_id})
            if(setIdentityApi.code===1){
                message.success(setIdentityApi.msg)
                this.handleGetList()
            }else{
                message.error(setIdentityApi.msg)
            }

        }
    }
    //resetAddUser
    resetAddUser = () => {

        this.setState({ user_name: "", user_pwd: "",defaultId:'' })
    }

    public render() {
        const { size, isShow, identityList, userList, api_authorityList, view_authorityList,user_name, user_pwd ,defaultId} = this.state

        return (
            <div className="addUser" >
                <div className="title">添加用户</div>
                <div className="box" >
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group value={size} onChange={this.handleSizeChange}>
                                <Radio.Button value="large">添加用户</Radio.Button>
                                <Radio.Button value="default">更新用户</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap" style={{ display: isShow ? 'block' : 'none' }} >
                            <Select style={{ width: 150 }} defaultValue="请选择身份id">
                                {
                                    userList && userList.map((item: any, index: number) => {
                                        return <Option value={item.user_name} key={index} >{item.user_name}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Input placeholder="请输入用户名" value={user_name} onChange={this.handleUser} name="user_name" style={{ width: 323, height: 30 }} ></Input>
                        </div>
                        <div className="wrap">
                            <Input.Password placeholder="请输入密码" value={user_pwd} onChange={this.handleUser} name="user_pwd" style={{ width: 323, height: 30 }} />
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} placeholder={defaultId} value={defaultId} onChange={(e:any)=>{
                                    this.handleUser({val:e,type:'identity_id'})
                            }} >
                                {
                                    identityList && identityList.map((item: any, index: number) => {
                                        return <Option value={item.identity_id} key={item.identity_id} >{item.identity_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} onClick={() => {
                                this.addType('addUser')
                            }} type="primary">确定</Button>
                            <Button onClick={this.resetAddUser} >重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group  >
                                <Radio.Button value="large" style={{ color: "#295eff", border: "1px solid #295eff" }}>添加身份</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Input placeholder="请输入身份名称" name="identity_text" onChange={this.handleUser} style={{ width: 323, height: 30 }} ></Input>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} type="primary" onClick={() => {
                                this.addType("addIdentity")
                            }} >确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group >
                                <Radio.Button value="large" style={{ color: "#295eff", border: "1px solid #295eff" }}>添加api接口权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Input placeholder="请输入api接口权限名称" style={{ width: 323, height: 30 }} ></Input>
                        </div>
                        <div className="wrap">
                            <Input placeholder="请输入api接口权限Url" style={{ width: 323, height: 30 }} ></Input>
                        </div>
                        <div className="wrap">
                            <Input placeholder="请输入api接口权限方法" style={{ width: 323, height: 30 }} ></Input>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group>
                                <Radio.Button value="large" style={{ color: "#295eff", border: "1px solid #295eff" }} >添加视图接口权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Input placeholder="请输入视图接口权限名称" name="view_authority_text"  onChange={this.handleUser} style={{ width: 323, height: 30 }} ></Input>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} onClick={() => {
                                this.addType('authorityView')
                            }} type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group>
                                <Radio.Button value="large" style={{ color: "#295eff", border: "1px solid #295eff" }} >给身份设置api接口权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }}  onChange={(e:any)=>{
                                this.handleUser({val:e,type:"identity_id"})
                            }} defaultValue="请选择身份id">
                                {
                                    identityList && identityList.map((item: any, index: number) => {
                                        return <Option value={item.identity_id} key={item.identity_id} >{item.identity_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} onChange={(e:any)=>{
                                this.handleUser({val:e,type:" api_authority_id"})
                            }}  defaultValue="请选择接口权限">
                                {
                                    api_authorityList && api_authorityList.map((item: any, index: number) => {
                                        return <Option value={item.api_authority_id} key={item.api_authority_id} >{item.api_authority_text}</Option>
                                    })
                                }

                            </Select>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} onClick={()=>{
                                this.setType('setIdentityApi')
                            }}  type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group >
                                <Radio.Button value="large" style={{ color: "#295eff", border: "1px solid #295eff" }}>给身份设置视图权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} onChange={(e:any)=>{
                                this.handleUser({val:e,type:'identity_id'})
                            }}  defaultValue="请选择身份id">
                                {
                                    identityList && identityList.map((item: any, index: number) => {
                                        return <Option value={item.identity_id} key={item.identity_id} >{item.identity_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} onChange={(e:any)=>{
                                 this.handleUser({val:e,type:"view_authority_id"})
                            }} defaultValue="请选择视图权限id">
                                {
                                    view_authorityList && view_authorityList.map((item: any, index: number) => {
                                        return <Option value={item.view_authority_id} key={item.view_authority_id} >{item.view_authority_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} onClick={()=>{
                                this.setType('setIdentity')
                            }}  type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser