import * as React from 'react'
import { inject, observer } from "mobx-react"
import { Table, Button, Modal, Input, Form, Icon, message, Select } from 'antd';
import "./scss/index.css"
interface PropsInfo {
    classType: any,
    form: any,
    history: any,
    question:any
}

const { Option } = Select

const columns = [
    {
        title: "班级名",
        dataIndex: 'grade_name',
        key: 'grade_id'
    },
    {
        title: "课程名",
        dataIndex: 'subject_text',
        key:'subject_id'
    },
    {
        title: "教室号",
        dataIndex: 'room_text',
        key: 'room_id'
    }, {
        title: "操作",
        dataIndex: '',
        key: 'x',
        render: () => <span><a>修改</a>|<a>删除</a></span>,
    }
]

@inject('classType','question')
@observer




export class ClassType extends React.Component<PropsInfo> {
    state = {
        gradeList: [],
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        subjectList:[]
    }
    getList = async () => {
        let classGrade = await this.props.classType.getTabAction("/manger/grade")
        let subject= await this.props.question.getSubject()
        classGrade.data.map((item: any, index: number) => item.key = index)
        if(classGrade.code===1){
            this.setState({gradeList: classGrade.data})
        }
         if(subject.code===1){
            this.setState({ subjectList:subject.data})
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
          
                 let result = await this.props.classType.addListAction("/manger/grade",values)
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
    constructor(props: any) {
        super(props)
        this.getList()
    }
    public render() {
        let { gradeList, visible, confirmLoading,subjectList } = this.state
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div className="title">班级管理</div>
                <div className="content-box" >
                    <Button type="primary" onClick={this.showModal} style={{ margin: "10px", width: 158, height: 40, background: "#0139fd" }}>
                        添加班级
                    </Button>
                    <Modal
                        title="添加班级"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                        cancelText="取消"
                        okText="确定"
                        okType="primary"
                    >
                        <Form.Item label="班级名">
                            {getFieldDecorator('grade_name', {
                                rules: [{ required: true, message: 'Userquestions Classname!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="班级名"
                                />
                            )}
                        </Form.Item>
                        <Form.Item label="教室号">
                            {getFieldDecorator('room_id', {
                                initialValue:"请选择教室号",
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your ClassRome-Number!',
                                    },
                                ],
                            })(<Select style={{width:"100%"}} >
                                {
                                    gradeList && gradeList.map((item: any, index: number) => {
                                        return <Option value={item.room_id} key={index} >{item.room_text}</Option>
                                    })
                                }
                            </Select>)}
                        </Form.Item>
                        <Form.Item label="课程名">
                            {getFieldDecorator('subject_id', {
                                initialValue:"课程名",
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Subject!',
                                    },
                                ],
                            })(<Select style={{width:"100%"}} >
                                {
                                    subjectList && subjectList.map((item: any, index: number) => {
                                        return <Option value={item.subject_id} key={item.subject_id} >{item.subject_text}</Option>
                                    })
                                }
                            </Select>)}
                        </Form.Item>
                    </Modal>
                    <Table columns={columns}  dataSource={gradeList} />
                </div>
               
            </div>
        )
    }
}

export default Form.create({ name: 'classType' })(ClassType)