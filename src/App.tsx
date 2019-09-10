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
import {IntlProvider} from 'react-intl';
import zhCN from './language/zh-CN';
import enUS from './language/en-US';
import { Interface } from 'readline';
const localeMap = {
  en: enUS,
  zh: zhCN
}

//创建一个browser router
const history = createBrowserHistory()
guardInit(history)
interface propsInfo{
  user?:any,
  global?:any,message:any,local:any
}

@inject("user", "global")
@observer


class App extends React.Component<any> {
  public render() {
    const myRoutes = filterView(routes, this.props.user.viewAuthority);
    return (<IntlProvider locale={this.props.global.locale} messages={localeMap[this.props.global.locale]}>
      <Router history={history} >
        <RoutesView routes={myRoutes} />
      </Router>
    </IntlProvider>
    );
  }
}
// children: Element; locale: any; message: any;
export default App;
