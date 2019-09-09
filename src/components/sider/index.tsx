import { Layout, Menu, Breadcrumb, Icon } from "antd";
import * as React from "react"
//引入用户路由
import routes from "../../router/routerSetting"
import {filterView} from "../../util/permission"


import {NavLink} from "react-router-dom"
import {observer,inject} from "mobx-react"

const { Sider } = Layout
const { SubMenu } = Menu;

interface PropsInfo{
  user?:any
}

@inject("user")
@observer

class Siders extends React.Component<PropsInfo> {
  state = {
    collapsed: false,
    navList: [
      {
        "title": "试题管理",
        "type":"sliders",
        "children": [
          {
            "title": "添加试题",
            "id": 1,
            "path":"/main/question/addQuestion"
          },
          {
            "title": "试题分类",
            "id": 2,
            "path":"/main/question/typeQuestion"
          },
          {
            "title": "查看试题",
            "id": 3,
            "path":"/main/question/showQuestion"
          }
        ]
      },
      {
        "title": "用户管理",
        "type":"team",
        "children": [
          {
            "title": "添加用户",
            "id": 4,
            "path":"/main/user/addUser"
          },
          {
            "title": "用户展示",
            "id": 5,
            "path":"/main/user/showUser"
          }
        ]
      },
      {
        "title": "考试管理",
        "type":"schedule" ,
        "children": [
          {
            "title": "添加考试",
            "id": 6,
            "path":"/main/text/addText"
          },
          {
            "title": "试卷列表",
            "id": 7,
            "path":"/main/text/listText"
          }
        ]
      }, {
        "title": "班级管理",
        "type":"project",
        "children": [
          {
            "title": "班级管理",
            "id": 8,
            "path":"/main/className/classType"
          },
          {
            "title": "教室管理",
            "id": 9,
            "path":"/main/className/classRoom"
          },
          {
            "title": "学生管理",
            "id": 10,
            "path":"/main/className/student"
          }
        ]
      }, {
        "title": "阅卷管理",
        "type":"project",
        "children": [
          {
            "title": "待批班级",
            "id": 11,
            "path":"/main/marking/watingClass"
          }

        ]
      }
    ]
  }
  constructor(props: any) {
    super(props)
  }
  public onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };
  render() {
    let { navList } = this.state
    //用户权限
    let {viewAuthority} = this.props.user;

    let myRoutes:any = filterView(routes,viewAuthority)
    //console.log(viewAuthority,myRoutes)
    myRoutes = myRoutes.find((item:any)=>item.children).children
    return <Sider collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{height:"100%",position:"fixed",top:"64px"}}>
      <div className="logo">
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {myRoutes.map((item: any, index: number) =>
            <SubMenu
              key={item.title}
              title={
                <span>
                  <Icon type={item.type} />
                  <span>{item.title}</span>
                </span>
              }
            >
              {item.children && item.children.map((sub: any) =>
                <Menu.Item key={sub.id} >
                <NavLink to={sub.path}>{sub.title}</NavLink>
                </Menu.Item>
              )}
            </SubMenu>
          )}

        </Menu>
      </div>
    </Sider>
  }
}
export default Siders;
