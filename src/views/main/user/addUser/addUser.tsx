import * as React from 'react'
import { Button, Radio, Input, Select } from 'antd';
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
        user_name:'',
        user_pwd:'',
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
    //身份
    handleIdentify = (e: any) => {
        this.setState({ identify: e.target.value })
    }
    //api
    handleApiChange = (e: any) => {
        this.setState({ api: e.target.value })
    }
    //handleUser
    handleUser=(e:any)=>{
        if(e.target){
            console.log(e.target.value)
        }else{
            console.log(e)
        }
       
    }
    //addUser
    addUser=async()=>{
      //let userResult=await this.props.user.addListAction("/user")
    }
    public render() {
        const { size, identify, isShow, identityList, userList, api_authorityList, view_authorityList } = this.state
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
                            <Input placeholder="请输入用户名" onChange={this.handleUser}  style={{ width: 323, height: 30 }} ></Input>
                        </div>
                        <div className="wrap">
                            <Input.Password placeholder="请输入密码" onChange={this.handleUser} style={{ width: 323, height: 30 }} />
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择身份id" onChange={this.handleUser} >
                                {
                                    identityList && identityList.map((item: any, index: number) => {
                                        return <Option value={item.identity_text} key={item.identity_id} >{item.identity_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} onClick={this.addUser}  type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group value={identify} onChange={this.handleIdentify} >
                                <Radio.Button value="large" style={{ color: "#295eff", border: "1px solid #295eff" }}>添加身份</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Input placeholder="请输入身份名称" style={{ width: 323, height: 30 }} ></Input>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group value={size} onChange={this.handleApiChange}>
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
                            <Radio.Group value={size} onChange={this.handleApiChange}>
                                <Radio.Button value="large" style={{ color: "#295eff", border: "1px solid #295eff" }} >添加视图接口权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择已有视图">
                                {
                                    view_authorityList && view_authorityList.map((item: any, index: number) => {
                                        return <Option value={item.view_authority_text} key={item.view_authority_id} >{item.view_authority_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group value={size} onChange={this.handleApiChange}>
                                <Radio.Button value="large" style={{ color: "#295eff", border: "1px solid #295eff" }} >给身份设置api接口权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择身份id">
                                {
                                    identityList && identityList.map((item: any, index: number) => {
                                        return <Option value={item.identity_text} key={item.identity_id} >{item.identity_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择接口权限">
                                {
                                    api_authorityList && api_authorityList.map((item: any, index: number) => {
                                        return <Option value={item.api_authority_text} key={item.api_authority_id} >{item.api_authority_text}</Option>
                                    })
                                }

                            </Select>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group value={size} onChange={this.handleApiChange}>
                                <Radio.Button value="large" style={{ color: "#295eff", border: "1px solid #295eff" }}>给身份设置视图权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择身份id">
                                {
                                    identityList && identityList.map((item: any, index: number) => {
                                        return <Option value={item.identity_text} key={item.identity_id} >{item.identity_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择视图权限id">
                                {
                                    view_authorityList && view_authorityList.map((item: any, index: number) => {
                                        return <Option value={item.view_authority_text} key={item.view_authority_id} >{item.view_authority_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser