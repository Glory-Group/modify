import * as React from 'react';


//引入配置路由
import RoutesView from "./router/router"
import {createBrowserHistory} from "history"
import {Router} from "react-router"
import routes from "./router/routerSetting"


//引入andt样式
import 'antd/dist/antd.css';

//引入mobx实例
import store from './store'
import {Provider} from 'mobx-react';


//引入导航守卫
import guardInit,{filterView}from "./util/permission"
//创建一个browser router
const history= createBrowserHistory()

const myRoutes = filterView(routes,store.user.viewAuthority);
console.log('.....',myRoutes,routes)
class App extends React.Component {
  public render() {
    return (
      <Provider {...store}>
          <Router history={history} >
              <RoutesView routes={myRoutes} />
          </Router>
         
        </Provider>
       
    
    );
  }
}
guardInit(history)
export default App;
