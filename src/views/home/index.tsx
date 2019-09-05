import { Breadcrumb, Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { observer, inject } from "mobx-react"
import "../home/style.css"
import Head from "../../components/head/index"
import Siders from "../../components/sider/index"

const {Content}=Layout
@inject('question')
@observer
class Home extends React.Component {
  constructor(props: any) {
    super(props)
    // const { getQusetion } = props.question;
    // getQusetion()
  }
  /**
   * name
   */
  public getId=(id:any):void => {
    console.log(id)
  }
  
  public render() {

  return (
    <div className="Home">
      <Layout>
        <Head></Head>
        <Layout>
        <Siders {...this.props}></Siders>
        <Content>
        {this.props.children}
        </Content>
        </Layout>
        
      </Layout>
      


    </div>
  );
}


}

export default Home;