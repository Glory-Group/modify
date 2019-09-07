import * as React from 'react'
import { Form, Input, Cascader, InputNumber, Button, DatePicker } from 'antd';
import { observer, inject } from "mobx-react";
import moment from "moment"
const { RangePicker } = DatePicker;
interface propsInfo {
    form: any,
    question: any,
    text:any

}
@inject("question", "login","text")
@observer
export class AddText extends React.Component<propsInfo> {
    state = {
        examTypeOptions: [],
        exam_id: "",//考试类型id
        subjectListOptions: [],
        subject_id: "",//课程id
        number: 4,
        startValue: moment().startOf('day'),
        endValue: moment().startOf('day'),
        endOpen: false,
    }
    constructor(props: propsInfo) {
        super(props)
        this.getExamType()
        this.getSubject()

    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: Error, values: any) => {
            if (!err) {
                let {exam_id,subject_id,number,startValue,endValue}=this.state
                let {title}=values
                //将moment格式转为时间戳
                let start_time=+moment(startValue).format('x')
                let end_time=+moment(endValue).format('x')
                let params={
                    subject_id,exam_id,title,number,start_time,end_time
                }
                this.props.text.createTextAction(params)
                // console.log(exam_id,subject_id,number,startValue,endValue)
                // console.log(values, "values")

            }
        });
    };
    getExamType = async () => {
        let result = await this.props.question.getType()
        if (result.code === 1) {
            let examTypeList: any = []
            result.data.map((item: any, index: number) => {
                examTypeList.push({ value: item.exam_name, label: item.exam_name, id: item.exam_id, key: item.exam_id })
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
                subjectList.push({ value: item.subject_text, label: item.subject_text, id: item.subject_id, key: item.subject_id })
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
    onChangeNum = (value: number) => {
        this.setState({
            number: value
        })
    }
    disabledStartDate = (startValue: any) => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = (endValue: any) => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field: any, value: any) => {
        this.setState({
            [field]: value,
        });
    };

    onStartChange = (value: any) => {
        this.onChange('startValue', value);
    };

    onEndChange = (value: any) => {
        this.onChange('endValue', value);
    };

    handleStartOpenChange = (open: any) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = (open: any) => {
        this.setState({ endOpen: open });
    };
    public render() {
        const { getFieldDecorator } = this.props.form;
        const { examTypeOptions, subjectListOptions, startValue, endValue, endOpen } = this.state

        return (
            <div>
                <div className="title">
                    添加考试
               </div>
                <div className="content-box">
                    <Form onSubmit={this.handleSubmit} className="login-form content-box">
                        <Form.Item className="login-form-stem">
                            <span>试卷名称</span>
                            {getFieldDecorator('title', {
                                validateTrigger: "onBlur",
                                rules: [{ required: true, message: 'Please input text title!' }]
                            })(
                                <Input
                                    placeholder="请输入试卷名称"
                                    style={{ width: "500px", display: "block", marginTop: "10px" }}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item className="login-form-stem" style={{ width: "176px" }}>
                            <span>选择考试类型</span>

                            <Cascader options={examTypeOptions} onChange={this.onChangeExamType} placeholder="选择考试类型" />
                        </Form.Item>
                        <Form.Item className="login-form-stem" style={{ width: "176px" }}>
                            <span>请选择课程类型</span>

                            <Cascader options={subjectListOptions} onChange={this.onChangeSubjectType} placeholder="选择课程类型" />
                        </Form.Item>
                        <Form.Item>
                            <span>设置题量</span>
                            <InputNumber min={3} max={10} defaultValue={3}
                                onChange={this.onChangeNum}
                                style={{ width: "100px", display: "block", marginTop: "10px" }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <span>考试时间</span>
                            <div>
                                {/* <DatePicker showTime placeholder="开始时间" onChange={this.onChangeStartDate} onOk={this.onOk} />
                                <DatePicker showTime placeholder="结束时间" onChange={this.onChangeStartDate} onOk={this.onOk} /> */}
                                <div>
                                    <DatePicker
                                        disabledDate={this.disabledStartDate}
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                        value={startValue}
                                        placeholder="Start"
                                        onChange={this.onStartChange}
                                        onOpenChange={this.handleStartOpenChange}
                                    />
                                    <DatePicker
                                        disabledDate={this.disabledEndDate}
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                        value={endValue}
                                        placeholder="End"
                                        onChange={this.onEndChange}
                                        open={endOpen}
                                        onOpenChange={this.handleEndOpenChange}
                                    />
                                </div>
                            </div>

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                创建试卷
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create({ name: 'normal_login' })(AddText)