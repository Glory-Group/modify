import * as React from "react";
import { Layout } from 'antd';
import {inject, observer} from 'mobx-react'
import "./scss/header.css"
 
const {   Header } = Layout;
interface propsInfo{
    global?:any
}
@inject("global")
@observer

export class Head extends React.Component<propsInfo> {
    
    constructor(props:any){
       super(props)
    }

    public  render() {
        const {locale}=this.props.global
        return (
           <Header className="header" >
               <div className="header-img" style={{width:"120px",height:"31px",margin:"15px 50px",textAlign:'center',lineHeight:"31px"}} >
               <img style={{width:"120px",height:"28px"}} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
               </div>
               <button onClick={()=>this.props.global.changeLocale(locale==='zh'?'en':'zh')}
               style={{position:"absolute",left:"300px",top:"0px"}}
               >{locale==='zh'?'英文':'中文'}</button>
           </Header>
        )
    }
}

export default Head
 

