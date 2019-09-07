import * as React from 'react'
import { inject, observer } from "mobx-react"
import { Table, Button, Modal, Input, Form, Icon, message, Select, Divider } from 'antd';
import "./scss/index.css"
interface PropsInfo {
    classType: any,
    form: any,
    history: any,
    question: any
}

const { Option } = Select


@inject('classType', 'question')
@observer




export class ClassType extends React.Component<PropsInfo> {
    state = {
        gradeList: [],
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        subjectList: [],
        gradeName: "",
        type: "",
        grade_id: "",
        classRoomList:[],
        columns: [
            {
                title: "班级名",
                dataIndex: 'grade_name',
                key: 'grade_id'
            },
            {
                title: "课程名",
                dataIndex: 'subject_text',
                key: 'subject_id'
            },
            {
                title: "教室号",
                dataIndex: 'room_text',
                key: 'room_id'
            }, {
                title: "操作",
                key: 'action',
                render: (text: any) => (<span> <a onClick={() => this.updateGrade(text)}>修改</a>
                    <Divider type="vertical" />
                    <a onClick={() => { this.delGrade(text) }}>删除</a></span>),
            }
        ]


    }
    getList = async () => {
        let classGrade = await this.props.classType.getTabAction("/manger/grade")
        let subject = await this.props.question.getSubject()
        console.log(classGrade.data, "lllllllll")
        let gradeArr: any = []
        if (classGrade.code === 1) {
            classGrade.data.map((item: any, index: number) => {
                item.key = index              
            })
            this.setState({ gradeList: classGrade.data })
        }
        if (subject.code === 1) {
            subject.data.map((item: any, index: number) => item.key = index)
            this.setState({ subjectList: subject.data })
        }

    }
    updateGrade = (text: any) => {
        console.log(text.grade_name, "pppppppp"),
            this.setState({
                visible: true,
                gradeName: text.grade_name,
                type: "update",
                grade_id: text.grade_id
            });
        //this.props.classType.updateGradeAction({grade_id:text.grade_id})
    }
    getRoomList=async()=>{
        let classRoom=await this.props.classType.getTabAction("/manger/room")
        if(classRoom.code===1){
            this.setState({classRoomList:classRoom.data})
        }
    }
    delGrade = (text: any) => {
        console.log(text.grade_id)
        this.props.classType.delGradeAction({ grade_id: text.grade_id })
    }
    showModal = () => {
        this.setState({
            visible: true,
            type: "add"
        });
    };

    handleOk = (e: any) => {
        e.preventDefault();

        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                console.log(values)
                if (this.state.type === "update") {
                    let { room_id, subject_id } = values

                    let result = await this.props.classType.updateGradeAction({ grade_id: this.state.grade_id, room_id, subject_id })
                    if (result.code === 1) {
                        message.info(result.msg);
                        this.getList()
                        this.setState({
                            confirmLoading: true,
                        });
                        setTimeout(() => {
                            this.setState({
                                visible: false,
                                confirmLoading: false,
                            });
                        }, 2000);
                    } else {
                        message.error(result.msg);
                    }
                } else {
                    let result = await this.props.classType.addListAction("/manger/grade", values)
                    if (result.code === 1) {
                        message.info(result.msg);
                        this.getList()
                        this.setState({
                            confirmLoading: true,
                        });
                        setTimeout(() => {
                            this.setState({
                                visible: false,
                                confirmLoading: false,
                            });
                        }, 2000);
                    } else {
                        message.error(result.msg);
                    }
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
        this.getRoomList()
    }
    public render() {
        let { gradeList, visible, confirmLoading, subjectList, columns, gradeName,classRoomList } = this.state
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
                                initialValue: `${gradeName}`,
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
                                initialValue: "请选择教室号",
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your ClassRome-Number!',
                                    },
                                ],
                            })(<Select style={{ width: "100%" }} >
                                {
                                 classRoomList&& classRoomList.map((item: any, index: number) => {
                                        return <Option value={item.room_id} key={index} >{item.room_text}</Option>
                                    })
                                }
                            </Select>)}
                        </Form.Item>
                        <Form.Item label="课程名">
                            {getFieldDecorator('subject_id', {
                                initialValue: "课程名",
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Subject!',
                                    },
                                ],
                            })(<Select style={{ width: "100%" }} >
                                {
                                    subjectList && subjectList.map((item: any, index: number) => {
                                        return <Option value={item.subject_id} key={item.subject_id} >{item.subject_text}</Option>
                                    })
                                }
                            </Select>)}
                        </Form.Item>
                    </Modal>
                    <Table columns={columns} dataSource={gradeList} />
                </div>

            </div>
        )
    }
}

export default Form.create({ name: 'classType' })(ClassType)