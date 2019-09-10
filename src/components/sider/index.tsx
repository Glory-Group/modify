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
    collapsed: false
  }
  constructor(props: any) {
    super(props)
  }
  public onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };
  render() {
    //用户权限
    let {viewAuthority} = this.props.user;
    let myRoutes:any = filterView(routes,viewAuthority)
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
               sub.title&&<Menu.Item key={sub.id} >
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
