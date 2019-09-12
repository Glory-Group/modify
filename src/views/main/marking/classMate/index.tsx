import * as React from 'react'
import { Form, Input, Cascader, InputNumber, Button, DatePicker,Table } from 'antd';
import { observer, inject } from "mobx-react";
import "./scss/listText.css"
interface propsInfo {
    form: any,
    mark:any,
    text:any,
    login:any,
    question:any,
    classType:any,
    match:any

}
@inject("question", "login", "text",'mark','classType')
@observer
export class ClassMate extends React.Component<propsInfo> {
    state = {
        classNameList: [],
        exam_id: "",//考试类型id
        classMateList: [],
        subject_id: "",//课程id
        examList: [],
        startTime:"",
        endTime:"",
        columns: [
            {
                title: '班级',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '姓名',
                dataIndex: 'grade_name',
                key: 'grade_name',
            },
            {
                title: '阅卷状态',
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
            },{
                title:"成材率",
                dataIndex:'',
                key:''
            },
            {
                title: '操作',
                dataIndex: '',
                key: 'x',
                render:()=> <a>批卷</a>
            }

        ],
    }
    constructor(props: propsInfo) {
        super(props)
        this.getClassList()
        this.getClassMateList()

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
    getClassList = async () => {
        let result = await this.props.classType.getTabAction("/manger/grade")
        if(result.code===1){
            result.data.map((item:any,index:number)=>item.key=index)
            let classNameList: any = []
            result.data.map((item: any, index: number) => {
                classNameList.push({ value: item.grade_name, label: item.grade_name, id: item.grade_id, key: item.grade_id })
                return classNameList
            })
         
            this.setState({classNameList})
        }
    }
    getClassMateList = async () => {
        let {id}=this.props.match.params
        let result = await this.props.mark.getMarkListAction("/exame/student",{grade_id:id})
        console.log(result)
        if(result.code===1){
            result.data.map((item:any,index:number)=>item.key=index)
            this.setState({classMateList:result.exam})
        }
      
    }

    onChangeSubjectType = (value: any, item: any) => {
        this.setState({
            subject_id: item[0].id
        })
    }
   public render(){
    let { classNameList,columns,examList,classMateList} = this.state
    console.log(classMateList)
       return (
           <div>
                <div className="title">
                    试卷列表
                </div>
                <div className="content-box">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item className="login-form-stem">
                            <span>状态:</span>
                            <Cascader  
                                className="select-box"
                            />
                            <span>班级:</span>
                            <Cascader options={classNameList} onChange={this.onChangeSubjectType} 
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

export default Form.create({ name: 'normal_login' })(ClassMate)