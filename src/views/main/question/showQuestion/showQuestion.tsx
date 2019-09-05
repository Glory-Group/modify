import * as React from 'react'
import {inject, observer} from 'mobx-react'
import ShowItem from "../../../../components/question/showItem"

interface Props{
    question:any
}

@inject('question')
@observer

export class ShowQuestion extends React.Component<Props> {
    state={
        dataList:[]
    }
    getList:any= async( )=>{
      
         const result = await this.props.question.getQuestion();
         let {data}=result
         console.log(data)
         this.setState({dataList:data})
    }
    constructor(props:any){
       super(props)
       this.getList()
    }

    public  render() {
        let {dataList}=this.state
        return (
            <div className="wrap" >
               <h2 style={{padding:"20px 0px", marginTop:"10px"}}>查看试题</h2>
               <div className="show-top"></div>
               <div className="show-bottom">
                   <div className="bottom-content">
                          {
                              dataList&&dataList.map((item:any,index)=>{
                                  return <div className="show-item" key={index} >
                                      <div className="left">
                                          <a href="#">
                                              <div style={{margin:"0 0 4px"}} > <span style={{color:"rgba(0,0,0,0.65)"}} >{item.title}</span> </div>
                                              <div style={{margin:"10px 0"}}> 
                                                <span style={{color: "#1890ff",background: "#e6f7ff",border:"1px solid #91d5ff",margin:"0 8px 0 0",padding:"0 7px"}} >{item.questions_type_text}</span>
                                                <span style={{color: "#2f54eb",background: "#f0f5ff",border:"1px solid #adc6ff",margin:"0 8px 0 0",padding:"0 7px"}}>{item.subject_text}</span>
                                                <span style={{color: "#fa8c16",background:" #fff7e6",border:"1px solid #ffd591",margin:"0 8px 0 0",padding:"0 7px"}} >{item.exam_name}</span> 
                                              </div>
                                              <div style={{color:"#0139fd"}}>{item.user_name}发布</div>
                                          </a>
                                      </div>
                                      <div className="right">
                                          <a style={{color:"#0139fd"}}>编辑</a>
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