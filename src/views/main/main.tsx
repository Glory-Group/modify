import * as React from 'react'
import { Icon, Menu, Layout } from 'antd';
import { NavLink } from "react-router-dom"
import Head from "../../components/header/header"
import Slider from "../../components/sider/index"
import ContentForm from "../../components/content/index"
import RouterView from "../../router/routerview"
import {observer, inject} from 'mobx-react';
import "./scss/style.css"


interface Props{
  question: any,
}

@inject('question')
@observer
 export class SiderDemo extends React.Component<Props> {
  public state = {
    collapsed: false,
  };

  public render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Head></Head>
        <Layout style={{height:"100%"}}>
          <Slider></Slider>
          <ContentForm>
          {this.props.children}
          </ContentForm>

        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo