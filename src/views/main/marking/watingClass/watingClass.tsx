import * as React from 'react'
import { inject, observer } from "mobx-react"
import { Table, Button, Modal, Input, Form, Icon, message, Select } from 'antd';

interface PropsInfo {
    mark: any,
    form: any,
    history: any,
    classType:any
}
const columns=[
    {
        title:"班级名",
        dataIndex: 'grade_name',
        key: 'grade_id'
    },
    {
        title:"课程名称",
        dataIndex: 'subject_text',
        key: 'subject_id'+'grade_id'
    },
    {
        title:"阅卷状态",
        dataIndex:'',
        key:''
    },
    {
        title:"课程名称",
        dataIndex: 'subject_text',
        key: 'subject_id'
    },
    {
        title:"成材率",
        dataIndex: 'room_text',
        key: 'room_id'
    }, {
        title:"操作",
        dataIndex:'',
        key:'y',
        render:(text:any)=>{
          return   <span> <a href={"/main/marking/classMate/"+text.grade_id} >批卷</a> </span>
        }
    }
]

@inject('mark','classType')
@observer

export class WatingClass extends React.Component<PropsInfo> {
    state={
       waitList:[]
    }
    getList=async()=>{
        let result = await this.props.classType.getTabAction("/manger/grade")
        
        console.log(result)
        if(result.code===1){
            result.data.map((item: any, index: number) => item.key = index)
            this.setState({waitList:result.data})
        }else{
            message.error(result.msg)
        }
    }
    constructor(props:any){
      super(props)
      this.getList()
    }

    public  render() {
        let {waitList}=this.state
        return (
            <div>
               <div className="title">待批班级</div>
               <div className="content-box">
               <Table columns={columns}  dataSource={waitList} />
               </div>
            </div>
        )
    }
}

export default WatingClass