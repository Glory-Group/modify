import * as React from "react";
import { Layout,Menu,Icon } from 'antd';
import {inject, observer} from 'mobx-react'
 
import { NavLink } from "react-router-dom"
const {   Sider } = Layout;
const { SubMenu } = Menu;
@inject()
@observer

export class Slider extends React.Component {
    public  state = {
        collapsed: false,
      };
    constructor(props:any){
       super(props)
    }
    public onCollapse = (collapsed:any) => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

    public  render() {
        return (
            <Sider  collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
               
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="sliders" />
                    <NavLink to="/main/question" >试题管理</NavLink>
                  </span>
                }
              >
                <Menu.Item key="1"> <NavLink to="/main/question/addQuestion">添加试题</NavLink> </Menu.Item>
                <Menu.Item key="2"><NavLink to="/main/question/typeQuestion">试题分类</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to="/main/question/showQuestion">查看试题</NavLink></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <NavLink to="/main/user">用户管理</NavLink>
                  </span>
                }
              >
                <Menu.Item key="4"><NavLink to="/main/user/addUser">添加用户</NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink to="/main/user/showUser">用户展示</NavLink></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="schedule" />
                    <NavLink to="/main/text">考试管理</NavLink>
                  </span>
                }
              >
                <Menu.Item key="6"><NavLink to="/main/text/addText">添加考试</NavLink></Menu.Item>
                <Menu.Item key="7"><NavLink to="/main/text/listText">试卷列表</NavLink></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="project" />
                    <NavLink to="/main/className">班级管理</NavLink>
                  </span>
                }
              >
                <Menu.Item key="8"><NavLink to="/main/className/classRoom">班级管理</NavLink></Menu.Item>
                <Menu.Item key="9"><NavLink to="/main/className/classType">教室管理</NavLink></Menu.Item>
                <Menu.Item key="10"><NavLink to="/main/className/student">学生管理</NavLink></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="project" />
                    <NavLink to="/main/marking">阅卷管理</NavLink>
                  </span>
                }
              >
                <Menu.Item key="11"><NavLink to="/main/marking/watingClass">待批班级</NavLink></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        )
    }
}

export default Slider
 