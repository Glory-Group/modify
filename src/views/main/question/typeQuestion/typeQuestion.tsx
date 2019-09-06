import * as React from 'react'
import { observer, inject } from "mobx-react"
import { Table, Button, Modal, Input, Form, Icon, message } from 'antd';
import "./scss/style.css"
interface propsInfo {
    question: any,
    form: any,
    history:any
}
const columns = [
    {
        title: '类型排序',
        dataIndex: 'questions_type_sort',
        key: 'questions_type_sort',
        // render: (text: any) => <a>{text}</a>,
    },
    {
        title: '类型ID',
        dataIndex: 'questions_type_id',
        key: 'questions_type_id',
    },
    {
        title: '类型名称',
        dataIndex: 'questions_type_text',
        key: 'questions_type_text',
    }

];
@inject("question")
@observer

export class TypeQuestion extends React.Component<propsInfo> {
    state = {
        questionTypeList: [],
        text: "",
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    }
    constructor(props: any) {
        super(props)

        this.getList()
    }
    getList = async () => {
        let result = await this.props.question.questionType()
        if(result.code===1){
            result.data.map((item: any, index: number) => item.key = index)
            this.setState({
                questionTypeList: result.data
            })
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
                let param = {
                    text: values.text,
                    sort: this.state.questionTypeList.length && this.state.questionTypeList.length + 1
                }

                let result = await this.props.question.addTypeAction(param)
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
                }

            }
        })
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    public render() {
        let { questionTypeList, visible, confirmLoading } = this.state
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div>
                    <Button type="primary" onClick={this.showModal} style={{ margin: "10px" }}>
                        添加类型
                    </Button>
                    <Modal
                        title="创建新类型"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <Form.Item>
                            {getFieldDecorator('text', {
                                rules: [{ required: true, message: 'Userquestions typename!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Userquestions typename"
                                />,
                            )}
                        </Form.Item>
                    </Modal>
                </div>
                <Table columns={columns}  dataSource={questionTypeList} />


            </div>
        )
    }
}

export default Form.create({ name: 'normal_login' })(TypeQuestion)