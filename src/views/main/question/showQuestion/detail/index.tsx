import * as React from 'react'
import { inject, observer } from 'mobx-react'
import "./scss/index.css"
interface PropsInfo {
    match: any,
    question: any
}

@inject('question')
@observer

export class ShowDetail extends React.Component<PropsInfo> {
    state = {
        dataList: []
    }
    getList: any = async () => {
        let { match } = this.props
        let id = match.params.id
        const result = await this.props.question.getQuestion();
        const data = result.filter((item: any) => item.questions_id === id)
        let { questions_type_id, subject_id, exam_id, questions_id } = data[0]
        const dataList = await this.props.question.condition({ questions_id, questions_type_id, subject_id, exam_id })
        console.log(dataList)
        this.setState({ dataList })

    }
    constructor(props: any) {
        super(props)
        this.getList()
    }
    public render() {
        let { dataList } = this.state
        return (
            <div className="detail" >
                <h2 style={{ padding: "20px 0px", marginTop: "10px" }}>试题详情</h2>

                {
                    dataList && dataList.map((item: any, index) => {
                        return <div key={index} className="box" >
                            <div className="left">
                                <span style={{ padding: "20px 0px", marginTop: "10px", fontSize: 14 }}>出题人:{item.user_name}</span>
                                <h3 style={{ padding: "20px 0px", marginTop: "10px" }}>题目信息</h3>

                                <div style={{ margin: "10px 0" }}>
                                    <span style={{ color: "#1890ff", background: "#e6f7ff", border: "1px solid #91d5ff", margin: "0 8px 0 0", padding: "0 7px" }} >{item.questions_type_text}</span>
                                    <span style={{ color: "#2f54eb", background: "#f0f5ff", border: "1px solid #adc6ff", margin: "0 8px 0 0", padding: "0 7px" }}>{item.subject_text}</span>
                                    <span style={{ color: "#fa8c16", background: " #fff7e6", border: "1px solid #ffd591", margin: "0 8px 0 0", padding: "0 7px" }} >{item.exam_name}</span>
                                </div>
                                <div style={{ margin: "0 0 4px" }} > <span style={{ color: "rgba(0,0,0,0.65)" }} >{item.title}</span> </div>
                                <div>
                                    {item.questions_stem}
                                </div>
                            </div>
                            <div className="mid"></div>
                            <div className="right">

                            </div>

                        </div>
                    })
                }
            </div>
        )
    }
}

export default ShowDetail