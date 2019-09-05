import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Select, Button } from "antd"
import ShowItem from "../../../../components/question/showItem"
const { Option } = Select;
interface Props {
    question: any,
    history:any
}

@inject('question')
@observer

export class ShowQuestion extends React.Component<Props> {
    state = {
        dataList: [],
        subjectList: [],
        examType: [],
        questionType:[],
        subject:[],
        count:-1
    }
    getList: any = async () => {

        const result = await this.props.question.getQuestion();
        const datas = await this.props.question.getSubject();
        const examType = await this.props.question.getType();
        const questionType = await this.props.question.questionType();
        console.log(result)
      //  this.state.subject=[...this.refs.subject.children]
        this.setState({ dataList: result, subjectList: datas, examType,questionType,subject:this.refs.subject })
    }
    constructor(props: any) {
        super(props)
        this.getList()
        this.changeBg()
    }
    changeBg:any=(index:number)=>{
         this.setState({count:index})
    }

    public render() {
        let { dataList, subjectList, examType , questionType ,count} = this.state
        let {history}=this.props
        return (
            <div className="wrap" >
                <h2 style={{ padding: "20px 0px", marginTop: "10px" }}>查看试题</h2>
                <div className="show-top">
                    <div className="subject-top">
                        <label htmlFor="">课程类型</label>
                        <div className="subject-list" ref="subject" >
                                   <div  >
                                     <span className="subject-all"   >All</span> 
                                    </div>
                            {
                                subjectList && subjectList.map((item: any, index) => {
                                    return <div  key={index}  >
                                       <span className={count===index?'active':"subject-item"}  onClick={()=>{
                                        this.changeBg(index)
                                    }} >{item.subject_text}</span> 
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="subject-bottom">
                        <div>
                            <label htmlFor="">考试类型</label>
                            <div className="exam-type">
                                <Select defaultValue="" style={{ width: 120, margin: "0 11px", height: 30 }}>
                                    {
                                        examType && examType.map((item: any, index) => {
                                            return <Option value={item.exam_name} key={index} >{item.exam_name}</Option>
                                        })
                                    }
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">题目类型</label>
                            <div className="exam-type">
                                <Select defaultValue="" style={{ width: 120, margin: "0 11px", height: 30 }}>
                                    {
                                        questionType && questionType.map((item: any, index) => {
                                            return <Option value={item.questions_type_text} key={index} >{item.questions_type_text}</Option>
                                        })
                                    }
                                </Select>
                            </div>
                        </div>
                        <div>
                            <Button
                                type="primary"
                                icon="search"
                                style={{width:130,height:32,background:"linear-gradient(-90deg,#4e75ff,#0139fd)"}}
                            >
                                查询
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="show-bottom">
                    <div className="bottom-content">
                        {
                            dataList && dataList.map((item: any, index) => {
                                return <div className="show-item" key={index}  >
                                    <div className="left" onClick={()=>{
                                        //history.push({path:"/main/question/detail/"+item.questions_id,params:item})
                                    }} >
                                       <a href={"/main/question/detail/"+item.questions_id}>
                                            <div style={{ margin: "0 0 4px" }} > <span style={{ color: "rgba(0,0,0,0.65)" }} >{item.title}</span> </div>
                                            <div style={{ margin: "10px 0" }}>
                                                <span style={{ color: "#1890ff", background: "#e6f7ff", border: "1px solid #91d5ff", margin: "0 8px 0 0", padding: "0 7px" }} >{item.questions_type_text}</span>
                                                <span style={{ color: "#2f54eb", background: "#f0f5ff", border: "1px solid #adc6ff", margin: "0 8px 0 0", padding: "0 7px" }}>{item.subject_text}</span>
                                                <span style={{ color: "#fa8c16", background: " #fff7e6", border: "1px solid #ffd591", margin: "0 8px 0 0", padding: "0 7px" }} >{item.exam_name}</span>
                                            </div>
                                            <div style={{ color: "#0139fd" }}>{item.user_name}发布</div>
                                        </a> 
                                    </div>
                                    <div className="right">
                                        <a style={{ color: "#0139fd" }}>编辑</a>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>s
            </div>
        )
    }
}

export default ShowQuestion