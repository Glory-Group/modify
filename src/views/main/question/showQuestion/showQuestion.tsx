import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Select, Button, message } from "antd"
import ShowItem from "../../../../components/question/showItem"
import "./scss/index.css"
const { Option } = Select;
interface Props {
  question: any,
  history: any
}
@inject('question')
@observer
export class ShowQuestion extends React.Component<Props> {
  state = {
    dataList: [],//列表数据
    subjectList: [],//课程列表
    examType: [],//考试类型
    questionType: [],//题目类型
    count: -1,//高亮索引
    searchType: {//查询条件
      subjectType: '',//课程类型
      textType: '',//考试类型
      questionType: ''//题目类型
    }
  }
  constructor(props: any) {
    super(props)
    this.getList()
    this.changeBg()
  }
  getList: any = async () => {
    const result = await this.props.question.getQuestion();
    const datas = await this.props.question.getSubject();
    const examType = await this.props.question.getType();
    const questionType = await this.props.question.questionType();
    if (result.code === 1) {
      this.setState({ dataList: result.data })
    } else {
      message.error(result.msg)
    }
    if (datas.code === 1) {
      this.setState({ subjectList: datas.data })
    } else {
      message.error(datas.msg)
    }
    if (examType.code === 1) {
      this.setState({ examType: examType.data })
    } else {
      message.error(examType.msg)
    }
    if (questionType.code === 1) {
      this.setState({ questionType: questionType.data })
    } else {
      message.error(questionType.msg)
    }
  }
  searchList: any = async () => {
    let { searchType } = this.state
    let { subjectType, textType, questionType } = searchType
    const result = await this.props.question.getQuestion();
    if (searchType.subjectType === 'All') {
      this.setState({ dataList: result.data })
    } else {
      let data = [];
      if (subjectType && textType && questionType) {
        data = result.data.filter((item: any) => {
          return item.subject_text === subjectType && item.exam_name === textType && item.questions_type_text === questionType
        })
      }
      else if (subjectType && textType) {
        data = result.data.filter((item: any) => {
          return item.subject_text === subjectType && item.exam_name === textType
        })
      } else if (subjectType && questionType) {
        data = result.data.filter((item: any) => {
          return item.subject_text === subjectType && item.questions_type_text === questionType
        })
      } else if (textType && questionType) {
        data = result.data.filter((item: any) => {
          return item.exam_name === textType && item.questions_type_text === questionType
        })
      } else if (textType || subjectType || questionType) {
        data = result.data.filter((item: any) => {
          return item.subject_text === subjectType || item.exam_name === textType || item.questions_type_text === questionType
        })
      }
      this.setState({ dataList: data })
    }
  }
  handleText: any = async (e: any) => {
    let { searchType } = this.state
    searchType.textType = e
    this.setState({ searchType })
  }
  handleQuestion: any = async (e: any) => {
    let { searchType } = this.state
    searchType.questionType = e
    this.setState({ searchType })
  }
  changeBg: any = (text: string, index?: number) => {
    let { searchType } = this.state
    if (text === 'All') {
      searchType.subjectType = 'All'
      this.setState({ searchType })
    } else {
      this.setState({ count: index })
      searchType.subjectType = text
      this.setState({ searchType })
    }
  }
  public render() {
    let { dataList, subjectList, examType, questionType, count } = this.state
    let { history } = this.props
    return (
      <div className="wrap" >
        <div className="title">查看试题</div>
        <div className="content-box">
          <div className="show-top">
            <div className="subject-top">
              <label htmlFor="">课程类型</label>
              <div className="subject-list" ref="subject" >
                <div  >
                  <span className="subject-all" onClick={() => {
                    this.changeBg('All')
                  }}  >All</span>
                </div>
                {
                  subjectList && subjectList.map((item: any, index) => {
                    return <div key={index}  >
                      <span className={count === index ? 'active' : "subject-item"} onClick={() => {
                        this.changeBg(item.subject_text, index)
                      }} >{item.subject_text}</span>
                    </div>
                  })
                }
              </div>
            </div>
            <div className="subject-bottom">
              <div className="bottom-item" >
                <label htmlFor="">考试类型</label>
                <div className="exam-type">
                  <Select defaultValue="" onChange={this.handleText} style={{ width: "80%", margin: "0 11px", height: 30 }}>
                    {
                      examType && examType.map((item: any, index) => {
                        return <Option value={item.exam_name} key={index} >{item.exam_name}</Option>
                      })
                    }
                  </Select>
                </div>
              </div>
              <div className="bottom-item" >
                <label htmlFor="">题目类型</label>
                <div className="exam-type">
                  <Select defaultValue="" onChange={this.handleQuestion} style={{ width: "80%", margin: "0 11px", height: 30 }}>
                    {
                      questionType && questionType.map((item: any, index) => {
                        return <Option value={item.questions_type_text} key={index} >{item.questions_type_text}</Option>
                      })
                    }
                  </Select>
                </div>
              </div>
              <div className="bottom-item" >
                <Button
                  type="primary"
                  icon="search"
                  style={{ width: 130, height: 32, background: "linear-gradient(-90deg,#4e75ff,#0139fd)" }}
                  onClick={this.searchList}
                >
                  查询
                </Button>
              </div>
              <div className="bottom-item" >
              </div>
            </div>
          </div>
          <div className="show-bottom">
            <div className="bottom-content">
              {
                dataList && dataList.map((item: any, index) => {
                  return <div className="show-item" key={index}  >
                    <div className="left" onClick={() => {
                      history.push("/main/question/detail/" + item.questions_id)
                    }} >
                      <div style={{ margin: "0 0 4px" }} > <span style={{ color: "rgba(0,0,0,0.65)" }} >{item.title}</span> </div>
                      <div style={{ margin: "10px 0" }}>
                        <span style={{ color: "#1890ff", background: "#e6f7ff", border: "1px solid #91d5ff", margin: "0 8px 0 0", padding: "0 7px" }} >{item.questions_type_text}</span>
                        <span style={{ color: "#2f54eb", background: "#f0f5ff", border: "1px solid #adc6ff", margin: "0 8px 0 0", padding: "0 7px" }}>{item.subject_text}</span>
                        <span style={{ color: "#fa8c16", background: " #fff7e6", border: "1px solid #ffd591", margin: "0 8px 0 0", padding: "0 7px" }} >{item.exam_name}</span>
                      </div>
                      <div style={{ color: "#0139fd" }}>{item.user_name}发布</div>
                    </div>
                    <div className="right">
                      <a style={{ color: "#0139fd" }}>编辑</a>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowQuestion