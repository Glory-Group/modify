import * as React from 'react'
import "./scss/style.css"
import { Form, Icon, Input, Button, Checkbox, Menu, Dropdown, Cascader } from 'antd';
import { observer, inject } from "mobx-react"
const { TextArea } = Input
interface propsInfo {
    question: any,
    form: any,
    history: any,
    login:any
}
@inject("question","login")
@observer
export class AddQuestion extends React.Component<propsInfo> {
    state = {
        examTypeOptions: [],
        exam_id: "",//考试类型id
        subjectListOptions: [],
        subject_id: "",//课程id
        questionsTypeOptions: [],
        questions_type_id: "",//试题类型id
        user_id:"",
    }
    constructor(props: propsInfo) {
        super(props)
        this.getExamType()
        this.getSubject()
        this.getQuestionsType()
        this.getUserInfo()
        
    }
    getExamType = async () => {
        let result = await this.props.question.getType()
        if (result.code === 1) {
            let examTypeList: any = []
            result.data.map((item: any, index: number) => {
                examTypeList.push({ value: item.exam_name, label: item.exam_name, id: item.exam_id,key:item.exam_id })
                return examTypeList
            })
            this.setState({
                examTypeOptions: examTypeList
            })
        }
    }
    onChangeExamType = (value: any, item: any) => {
        this.setState({
            exam_id: item[0].id
        })
    }
    getSubject = async () => {
        let result = await this.props.question.getSubject()
        if (result.code === 1) {
            let subjectList: any = []
            result.data.map((item: any, index: number) => {
                subjectList.push({ value: item.subject_text, label: item.subject_text, id: item.subject_id,key:item.subject_id })
                return subjectList
            })
            this.setState({
                subjectListOptions: subjectList
            })
        }

    }
    onChangeSubjectType = (value: any, item: any) => {
        this.setState({
            subject_id: item[0].id
        })
    }
    getQuestionsType = async () => {
        let result = await this.props.question.questionType()
        if (result.code === 1) {
            let questionsTypeList: any = []
            result.data.map((item: any, index: number) => {
                questionsTypeList.push({ value: item.questions_type_text, label: item.questions_type_text, id: item.questions_type_id,key:item.questions_type_id })
                return questionsTypeList
            })
            this.setState({
                questionsTypeOptions: questionsTypeList
            })
        }
    }
    onChangeQuestionsType = (value: any, item: any) => {
        this.setState({
            questions_type_id: item[0].id
        })
    }
    getUserInfo=async()=>{
        let result=await this.props.login.getUserInfoAction()
        if(result.code===1){
            this.setState({
                user_id:result.data.user_id
            })
        }

    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        let {exam_id,subject_id,questions_type_id,user_id}=this.state
 
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values,exam_id,"1",subject_id,"2",questions_type_id,"3",user_id);
            }
        });
    };
    public render() {
        const { getFieldDecorator } = this.props.form;
        const { examTypeOptions, subjectListOptions, questionsTypeOptions } = this.state
        return (
            <div>
                添加试题
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item className="login-form-stem">
                        题目标题
                        {getFieldDecorator('title', {
                            validateTrigger: "onBlur",
                            rules: [{ required: true, message: 'Please input questions title!' }]
                        })(
                            <Input
                                placeholder="请输入提干"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        题目主题
                        {getFieldDecorator('questions_stem	', {
                            validateTrigger: "onBlur",
                            rules: [{ required: true, message: 'Please input questions stem!' }]
                        })(
                            <TextArea>
                                输入题目主题
                           </TextArea>
                        )}
                    </Form.Item>
                    <Form.Item>
                        选择考试类型
                        <Cascader options={examTypeOptions} onChange={this.onChangeExamType} placeholder="选择考试类型" />
                    </Form.Item>
                    <Form.Item>
                        请选择课程类型
                        <Cascader options={subjectListOptions} onChange={this.onChangeSubjectType} placeholder="选择课程类型" />
                    </Form.Item>
                    <Form.Item>
                        请选择题目类型
                        <Cascader options={questionsTypeOptions} onChange={this.onChangeQuestionsType} placeholder="选择题目类型" />
                    </Form.Item>
                    <Form.Item>
                        答案信息
                        {getFieldDecorator('questions_answer	', {
                            validateTrigger: "onBlur",
                            rules: [{ required: true, message: 'Please input questions answer!' }]
                        })(
                            <TextArea>
                                输入答案信息
                           </TextArea>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            提交
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        )
    }
}

export default Form.create({ name: 'normal_login' })(AddQuestion)