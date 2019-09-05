import {Layout} from "antd";
import * as React from "react"
import "./style.css"
const {Header} = Layout
class Head extends React.Component{
    render(){
        return <Layout>
             <Header className="head">
            八维教育
        </Header>
        </Layout>
       
    }
}
export default Head;