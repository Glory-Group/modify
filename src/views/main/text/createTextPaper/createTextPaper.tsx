import * as React from "react"
import { observer, inject } from "mobx-react"
import "./scss/style.css"
import { Button, message, Modal } from "antd"
interface propsInfo {
  text: any,
  history: any
}
@inject("text")
@observer

class CreateTextePaper extends React.Component<propsInfo>{
  state = {
    visible: false
  }
  constructor(props: any) {
    super(props)
  }
  getquestions = async () => {

  }
  createPaper = async () => {
    let params = ''
    let ids: any = new Array()
    this.props.text.questions.map((item: any) => {
      ids.push(item.questions_id)
      return ids
    })
    params = JSON.stringify(ids.join(","))
    let result = await this.props.text.createPaperAction({ question_ids: params })

    if (result.code === 1) {
      message.info(result.msg)
      this.props.history.push("/main/text/listText")
    }
  }
  delQuestion = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  public render() {
    return <div>
      <div className="title">
        创建试卷
            </div>
      <div className="content-box">
        {
          this.props.text.questions && this.props.text.questions.length && this.props.text.questions.map((item: any, index: number) =>
            <div key={index} className="question-content" style={{ padding: "10px" }}>
              {item.title}
              {item.questions_stem}
              <div>
                <Button type="primary" onClick={this.delQuestion}>
                  删除
                </Button>
                <Modal
                  title="确认提示"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>确认删除该题目？</p>

                </Modal>
              </div>
            </div>
          )
        }
        <div>

          <Button onClick={this.createPaper}>创建试卷</Button>
        </div>

      </div>
    </div>
  }
}

export default CreateTextePaper;