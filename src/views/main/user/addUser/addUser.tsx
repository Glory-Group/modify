import * as React from 'react'
import { Button, Radio, Input, Select } from 'antd';
import { inject, observer } from 'mobx-react'
import "./scss/index.css"
const { Option } = Select

interface PropsInfo{
    user:any
}

@inject('user')
@observer


export class AddUser extends React.Component<PropsInfo> {
    state = {
        size: 'large',
        identify: 'large',
        api: 'large',
        isShow:false
    };
    //用户
    handleSizeChange = async(e: any) => {
        this.setState({ size: e.target.value });
        this.setState({isShow:!this.state.isShow})
        let result=await this.props.user.getIdentity();
    };
    //身份
    handleIdentify = (e: any) => {
        this.setState({ identify: e.target.value })
    }
    //api
    handleApiChange = (e: any) => {
        this.setState({ api: e.target.value })
    }
    public render() {
        const { size, identify,isShow } = this.state
        return (
            <div className="addUser" >
                <h2 style={{ padding: "20px 0px", marginTop: "10px" }}>添加用户</h2>
                <div className="box" >
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group value={size} onChange={this.handleSizeChange}>
                                <Radio.Button value="large">添加用户</Radio.Button>
                                <Radio.Button value="default">更新用户</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap" style={{display:isShow?'block':'none'}} >
                            <Select style={{ width: 150 }} defaultValue="请选择身份id">
                                <Option value="Home" style={{ width: 150 }}>Home</Option>
                                <Option value="Company" style={{ width: 150 }}>Company</Option>
                            </Select>
                        </div>
                        <div className="wrap">
                            <Input placeholder="请输入用户名" style={{ width: 323, height: 30 }} ></Input>
                        </div>
                        <div className="wrap">
                            <Input.Password placeholder="请输入密码" style={{ width: 323, height: 30 }} />
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择身份id">
                                <Option value="Home" style={{ width: 150 }}>Home</Option>
                                <Option value="Company" style={{ width: 150 }}>Company</Option>
                            </Select>
                        </div>
                        <div className="wrap">
                            <Button style={{ background: "#295eff", width: 111 }} type="primary">确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="wrap" >
                            <Radio.Group value={identify} onChange={this.handleIdentify} >
                                <Radio.Button value="large" style={{color:"#295eff",border:"1px solid #295eff"}}>添加身份</Radio.Button>
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
                                <Radio.Button value="large" style={{color:"#295eff",border:"1px solid #295eff"}}>添加api接口权限</Radio.Button>
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
                                <Radio.Button value="large" style={{color:"#295eff",border:"1px solid #295eff"}} >添加视图接口权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择已有身份视图">
                                <Option value="Home" style={{ width: 150 }}>Home</Option>
                                <Option value="Company" style={{ width: 150 }}>Company</Option>
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
                                <Radio.Button value="large" style={{color:"#295eff",border:"1px solid #295eff"}} >给身份设置api接口权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择身份id">
                                <Option value="Home" style={{ width: 150 }}>Home</Option>
                                <Option value="Company" style={{ width: 150 }}>Company</Option>
                            </Select>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择接口权限">
                                <Option value="Home" style={{ width: 150 }}>Home</Option>
                                <Option value="Company" style={{ width: 150 }}>Company</Option>
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
                                <Radio.Button value="large" style={{color:"#295eff",border:"1px solid #295eff"}}>给身份设置视图权限</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择身份id">
                                <Option value="Home" style={{ width: 150 }}>Home</Option>
                                <Option value="Company" style={{ width: 150 }}>Company</Option>
                            </Select>
                        </div>
                        <div className="wrap">
                            <Select style={{ width: 150 }} defaultValue="请选择视图权限id">
                                <Option value="Home" style={{ width: 150 }}>Home</Option>
                                <Option value="Company" style={{ width: 150 }}>Company</Option>
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