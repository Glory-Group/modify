import * as React from 'react'
import { Icon, Menu, Layout } from 'antd';
import { NavLink } from "react-router-dom"
import Head from "../../components/header/header"
import Slider from "../../components/sider/index"
import ContentForm from "../../components/content/index"
import RouterView from "../../router/routerview"

 export class SiderDemo extends React.Component {
  public state = {
    collapsed: false,
  };

  public render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Head></Head>
        <Layout>
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