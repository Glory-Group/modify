import * as React from 'react'
import { Form, Input, Cascader, InputNumber, Button, DatePicker,Table } from 'antd';
import { observer, inject } from "mobx-react";
import "./scss/listText.css"
interface propsInfo {
    form: any,
    question: any,
    text: any

}
@inject("question", "login", "text")
@observer
export class ListText extends React.Component<propsInfo> {
    state = {
        examTypeOptions: [],
        exam_id: "",//考试类型id
        subjectListOptions: [],
        subject_id: "",//课程id
        examList: [],
        startTime:"",
        endTime:"",
        columns: [
            {
                title: '试卷信息',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '班级',
                dataIndex: 'grade_name',
                key: 'grade_name',
            },
            {
                title: '创建人',
                dataIndex: 'user_name',
                key: 'user_name',
            },
            {
                title: '开始时间',
                dataIndex: "startTime",
                key: 'startTime',
            },
            {
                title: '结束时间',
                dataIndex: 'endTime',
                key: 'endTime',
            },
            {
                title: '操作',
                dataIndex: 'questions_type_text',
                key: 'questions_type_text',
            }

        ],
    }
    constructor(props: propsInfo) {
        super(props)
        this.getExamType()
        this.getSubject()
        this.getExamList()

    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: Error, values: any) => {
            if (!err) {
                console.log(values, "values")
            }
        });
    };
    exangeDate=(date:any)=>{
        var time=new Date(date)
        var y = time.getFullYear();
        var M = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
        return `${y}-${M}-${d}-${h} ${m}-${s}`
      
    }
    getExamList = async () => {
        let result = await this.props.text.getExamListAction()
        if (result.code === 1) {
            let {examList}=this.state
            result.exam.map((item:any,index:number)=>{
                item.key=index
                item.startTime=this.exangeDate(result.exam[0].start_time*1)
                item.endTime=this.exangeDate(result.exam[0].end_time*1)
            })
            console.log(result.exam[0].start_time)
      
            this.setState({
                examList: result.exam
                //startTime:""+result.exam.start_time+(8 * 3600 * 1000).toString.toJSON().substr(0, 19).replace('T', ' ')
            })
            /**
      *avatar: null
 description: null
 end_time: "1553740200000"
 exam_exam_id: "gh1ye3-0i6opd"
 exam_id: "8sc5d7-7p5f9e-cb2zii-ahe5i"
 exam_name: "周考1"
 exam_type: "8sc5d7-7p5f9e-cb2zii-ahe5i"
 grade_id: (2) ["oery4-9h55c-76sdkj-fba5ag", "we0eya-r2td2b-2h4yhg-ggxp1vf"]
 grade_name: (2) ["1609A", "1612A"]
 identity_id: "63no9p-8y0k4"
 number: 3
 question_ids: "["4t0rar-39c33-wq098t-phh5ht","4vu7t9-t9vv08-chvz3r-n8i3nq","npcnawn-0apvx-qbofy-ms3t4p"]"
 room_id: (2) ["idf126-po0y5l-y19vjj-y2ud6o", "fantrl-x3hsdf-hfryfr-ixa9fb"]
 room_text: (2) ["34301", "34302"]
 start_time: "1553733000000"
 status: 0
 subject_id: "fqtktr-1lq5u"
 subject_text: "javaScript上"
 title: "测试2019.03.28"
 user_id: "w6l6n-cbvl6s"
 user_name: "chenmanjie"
      *
      */

        }
    }
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
    public render() {
        let { examTypeOptions, subjectListOptions,columns,examList} = this.state
        return (
            <div>
                <div className="title">
                    试卷列表
                </div>
                <div className="content-box">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item className="login-form-stem">
                            <span>考试类型:</span>
                            <Cascader options={examTypeOptions} onChange={this.onChangeExamType} placeholder="选择考试类型"
                                className="select-box"
                            />
                            <span>课程:</span>
                            <Cascader options={subjectListOptions} onChange={this.onChangeSubjectType} placeholder="选择课程类型"
                                className="select-box"
                            />
                            <Button type="primary">
                                查询
                            </Button>
                        </Form.Item>

                    </Form>
                    <div className="exam-list">
                        <div className="sub-title">
                            <span>试卷列表</span>

                        </div>
                        <div>
                        <Table columns={columns} dataSource={examList} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create({ name: 'normal_login' })(ListText)