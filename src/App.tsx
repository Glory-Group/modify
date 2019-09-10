import * as React from 'react';


//引入配置路由
import RoutesView from "./router/router"
import {createBrowserHistory} from "history"
import {Router} from "react-router"
import routes from "./router/routerSetting"
import {inject, observer} from 'mobx-react'

//引入andt样式
import 'antd/dist/antd.css';



//引入导航守卫
import guardInit,{filterView}from "./util/permission"
//创建一个browser router
const history= createBrowserHistory()
guardInit(history)


@inject('user')
@observer

class App extends React.Component<any> {
  public render() {
    const myRoutes = filterView(routes, this.props.user.viewAuthority);
    return (
      <Router history={history} >
          <RoutesView routes={myRoutes}/>
      </Router>
    );
  }
}
export default App;
