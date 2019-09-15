import * as React from 'react';
//引入配置路由
import RoutesView from "./router/router"
import { createBrowserHistory } from "history"
import { Router } from "react-router"
import routes from "./router/routerSetting"
import { inject, observer } from 'mobx-react'
//引入andt样式
import 'antd/dist/antd.css';
//引入导航守卫
import guardInit, { filterView } from "./util/permission"
// 引入国际化
import { IntlProvider } from 'react-intl';
import zhCN from './language/zh-CN';
import enUS from './language/en-US';
const localeMap = {
  en: enUS,
  zh: zhCN
}
//创建一个browser router
const history = createBrowserHistory()
guardInit(history)
interface propsInfo {
  user?: any,
  global?: any
}
@inject("user", "global")
@observer
class App extends React.Component<propsInfo> {
  constructor(props: propsInfo) {
    super(props)
    //获取相应身份对应的权限页面
    //this.props.user.getIdentityViewAction()
  }
  public render() {
    let myRoutes:any =[];
    if(this.props.user.nowIndetityViews.length){
       myRoutes = filterView(routes, this.props.user.nowIndetityViews);
    }
    
    // let nowIndetityViews=this.props.user.nowIndetityViews.length&&this.props.user.nowIndetityViews
 //   console.log(this.props.user.nowIndetityViews,"lkaslkalkla")
    return (
     <IntlProvider locale={this.props.global.locale} messages={localeMap[this.props.global.locale]}>
      <Router history={history} >
        <RoutesView/>
      </Router>
     </IntlProvider>
    );
  }
}
export default App;
