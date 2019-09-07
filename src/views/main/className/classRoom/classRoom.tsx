import * as React from 'react'
import {inject,observer} from "mobx-react"
import { Table, Button, Modal, Input, Form, Icon, message, Select } from 'antd';

interface PropsInfo{
    classType:any,
    history:any,
    form: any,
}

const {Option}=Select;

const columns=[
    {
        title: "教室号",
        dataIndex: 'room_text',
        key: 'room_id'
    }, {
        title: "操作",
        dataIndex: '',
        key: 'x',
        render: () => <span><a>删除</a></span>
    }
]

@inject('classType')
@observer

export class ClassRoom extends React.Component<PropsInfo> {
    state={
        roomList:[],
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    }
    getList=async()=>{
        let classRoom=await this.props.classType.getTabAction("/manger/room")
       
        if(classRoom.code===1){
            classRoom.data.map((item:any,index:number)=>item.key=index)
            this.setState({roomList:classRoom.data})
        }else{
            message.error(classRoom.msg)
        }
        
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
                console.log(values)
          
                 let result = await this.props.classType.addListAction("/manger/room",values)
                if (result.code === 1) {
                    message.info(result.msg);
                    this.props.history.go(0)
                    this.setState({                       
                        confirmLoading: true,
                      });
                    setTimeout(() => {
                        this.setState({
                            visible: false,
                            confirmLoading: false,
                        });
                    }, 2000);
                }else {
                    message.error(result.msg);
                }

            }
        })
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    constructor(props:any){
        super(props)
        this.getList()
    }
    public  render() {
        let {roomList,visible, confirmLoading}=this.state
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                 <div className="title">班级管理</div>
                <div className="content-box" >
                    <Button type="primary" onClick={this.showModal} style={{ margin: "10px", width: 158, height: 40, background: "#0139fd" }}>
                        添加教室
                    </Button>
                    <Modal
                        title="添加教室"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                        cancelText="取消"
                        okText="提交"
                        okType="primary"
                    >
                        <Form.Item label="教室号">
                            {getFieldDecorator('room_text', {
                                rules: [{ required: true, message: 'Userquestions Classname!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="教室名"
                                />
                            )}
                        </Form.Item>
                       
                        
                    </Modal>
                    <Table columns={columns}  dataSource={roomList} />
                </div>
               
            </div>
        )
    }
}

export default Form.create({ name: 'classRoom' })(ClassRoom)