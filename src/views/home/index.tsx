import { Breadcrumb, Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import {observer,inject} from "mobx-react"
import "../home/style.css"

@inject('question')
@observer
class Home extends React.Component {
  constructor(props:any){
    super(props)
    const {getQusetion}=props.question;
    getQusetion()
  }
  public render() {
    const { Content, Header, Sider } = Layout;
    const { SubMenu } = Menu;
    return (
      <div className="Home">
      <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      试题管理
              </span>
                  }
                >
                  <Menu.Item key="1">添加试题</Menu.Item>
                  <Menu.Item key="2">试题分类</Menu.Item>
                  <Menu.Item key="3">查看试题</Menu.Item>

                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      用户管理
              </span>
                  }
                >
                  <Menu.Item key="5">添加用户</Menu.Item>
                  <Menu.Item key="6">用户展示</Menu.Item>

                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      考试管理
              </span>
                  }
                >
                  <Menu.Item key="9">添加考试</Menu.Item>
                  <Menu.Item key="10">试卷列表</Menu.Item>

                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="notification" />
                      班级管理
              </span>
                  }
                >
                  <Menu.Item key="11">班级管理</Menu.Item>
                  <Menu.Item key="12">教室管理</Menu.Item>
                  <Menu.Item key="13">学会管理</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="notification" />
                      阅卷管理
              </span>
                  }
                >
                  <Menu.Item key="14">待批班级</Menu.Item>


                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  // margin: 0,
                  // minHeight: 280,
                }}
              >
                Content
        </Content>
            </Layout>
          </Layout>
        </Layout>,

      </div>
    );
  }


}

export default Home;