import * as React from 'react'
import { Form, Input, Cascader, Button, Table, message } from 'antd';
import { observer, inject } from "mobx-react";
import "./scss/listText.css"
import XLSX from 'xlsx'

const { Column, ColumnGroup } = Table;
interface propsInfo {
    form: any,
    question: any,
    text: any,
    classType: any,
    history: any

}
@inject("question", "login", "text", "classType")
@observer
export class Student extends React.Component<propsInfo> {
    state = {
        roomOptions: [],//教室号
        room_id: "",//教室id
        gradOptions: [],
        grade_id: "",//班级名
        studentList: [],
        startTime: "",
        endTime: "",
        newList: [],
        columns: [
            {
                title: '姓名',
                dataIndex: 'student_name',
                key: 'student_name',
            },
            {
                title: '学号',
                dataIndex: 'student_id',
                key: 'student_id',
            },
            {
                title: '班级',
                dataIndex: 'grade_name',
                key: 'grade_name',
            },
            {
                title: '教室',
                dataIndex: "room_text",
                key: 'room_text',
            },
            {
                title: '密码',
                dataIndex: 'student_pwd',
                key: 'student_pwd',
            },
            {
                title: '操作',
                key: 'action',
                render: (text: any, record: any) => (
                    <span>
                        <a onClick={() => { this.delStudent(text, record) }}>删除</a>
                    </span>
                ),
            },

        ],
    }
    constructor(props: propsInfo) {
        super(props)
        this.getRoomList()
        this.getGradeList()
        this.getStudentInfo()

    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: Error, values: any) => {
            if (!err) {
                let { studentList, room_id, grade_id } = this.state
                let { student_name } = values
                let newArr = studentList.filter((item: any) => {
                    let flag = true;
                    if (student_name){
                        flag = flag && student_name === item.student_name;
                    }
                    if (grade_id){
                        flag = flag && grade_id === item.grade_id;
                    }
                    if (room_id){
                        flag = flag && room_id === item.rorm_id;
                    }
                    return flag;
                })
                this.setState({
                    newList: newArr
                })
            }
        });
    };
    delStudent = async (text: any, record: any) => {
        console.log(text.student_id)
        let result = await this.props.classType.delStudentAction(text.student_id)
        if (result.code === 1) {
            message.info(result.msg)
            this.getStudentInfo()
        }

    }
    getStudentInfo = async () => {
        let result = await this.props.classType.getStudentInfoAction()
        if (result.code === 1) {
            result.data.map((item: any, index: number) => {
                item.key = index
            })

            this.setState({
                studentList: result.data,
                newList: result.data
            })
        }
    }
    getRoomList = async () => {
        let result = await this.props.classType.getRoomListAction()
        if (result.code === 1) {
            let roomList: any = []
            result.data.map((item: any, index: number) => {
                roomList.push({ value: item.room_text, label: item.room_text, id: item.room_id, key: item.room_id })
                return roomList
            })
            this.setState({
                roomOptions: roomList
            })
        }
    }
    onChangeRoomList = (value: any, item: any) => {
        if (item[0]) {
            this.setState({
                room_id: item[0].id
            })
        } else {
            this.setState({
                room_id: ""
            })
        }

    }
    getGradeList = async () => {
        let result = await this.props.classType.getGradeListAction()
        if (result.code === 1) {
            let gradeList: any = []
            result.data.map((item: any, index: number) => {
                gradeList.push({ value: item.grade_name, label: item.grade_name, id: item.grade_id, key: item.grade_id })
                return gradeList
            })
            this.setState({
                gradOptions: gradeList
            })
        }

    }
    onChangeGradeList = (value: any, item: any) => {
        if (item[0]) {
            this.setState({
                grade_id: item[0].id
            })
        } else {
            this.setState({
                grade_id: ""
            })
        }
    }
    reset=()=>{
        this.setState({

        })
    }

    exportExcel = ()=>{
        // 1.把table里面的数据生成worksheet
        let wroksheet = XLSX.utils.json_to_sheet(this.state.newList);

        // 2.把worksheet放到workbook里
        let workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, wroksheet);
        XLSX.utils.book_append_sheet(workbook, wroksheet);
        XLSX.utils.book_append_sheet(workbook, wroksheet);
        XLSX.utils.book_append_sheet(workbook, wroksheet);
        XLSX.utils.book_append_sheet(workbook, wroksheet);



        XLSX.writeFile(workbook, '学生名单.xlsx');
    }

    uploadExcel = (e:any)=>{
        console.log('e...', e.target, e.target.files);
        let reader = new FileReader();
        reader.onload = function(e: any){
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, {type: 'array'});
            console.log('workbook...', workbook);

            var ws = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
            console.log('data...', ws);
        }

        reader.readAsArrayBuffer(e.target.files[0]);
    }

    public render() {
        const { getFieldDecorator } = this.props.form;

        let { roomOptions, gradOptions, columns, studentList, newList } = this.state
        return (
            <div>
                <div className="title">
                    <span>学生管理</span>
                </div>
                <div className="content-box">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item className="login-form-stem">
                            {getFieldDecorator('student_name', {
                            })(
                                <Input
                                    placeholder="请输入学生姓名"
                                    style={{ width: "180px", display: "inline-block" }}
                                />,
                            )}
                            <Cascader options={roomOptions} onChange={this.onChangeRoomList} placeholder="选择教室号"
                                className="select-box"
                            />
                            <Cascader options={gradOptions} onChange={this.onChangeGradeList} placeholder="选择班级名"
                                className="select-box"
                            />
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                            <Button type="primary" onClick={this.reset} style={{marginLeft:"10px"}}>
                                重置
                            </Button>
                            <Button type="primary" onClick={this.exportExcel} style={{marginLeft:"10px"}}>
                                导出学生名单
                            </Button>
                            <Button type="primary"  style={{marginLeft:"10px"}}>
                                <input type="file" accept=".xlsx" onChange={this.uploadExcel}/>
                            </Button>
                        </Form.Item>

                    </Form>
                    <div className="exam-list">
                        <div className="sub-title">
                            <span>试卷列表</span>

                        </div>
                        <div>
                            <Table columns={columns} dataSource={newList} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create({ name: 'normal_login' })(Student)