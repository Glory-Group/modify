# 考试管理后台
- 使用TypeScript、mobx创建后台管理平台
## 启动项目
- 初始化
```js
create-react-app.cm exam-cms(项目名) --scripts-version=react-scripts-ts
```

- 启服务
```js
npm run start
```

## 环境搭建
- 引入装饰器
```js
npm install --save-dev @babel/plugin-proposal-decorators
```

- 引入路由
```js
npm install --save-dev react-router-dom @types/react-router-dom
```

- 引入mobx
```js
npm install --save-dev mobx mobx-react
```

- 引入antd
```js
npm install --save-dev antd
```
需要用到的其他的包

```
    "axios": "^0.19.0",
    "@babel/plugin-proposal-decorators": "^7.4.4",
    "@types/js-cookie": "^2.2.2",
    "@types/node": "^12.7.3",
    "@types/react": "^16.9.2",
    "@types/react-dom": "^16.9.0",
    "@types/react-loadable": "^5.5.1",
    "@types/react-router-dom": "^4.3.5",
    "for-editor": "^0.3.4",
    "js-cookie": "^2.2.1",
    "typescript": "^3.6.2",
    "moment": "^2.24.0",
```

### 目录结构
- public目录 （根目录，公共资源文件）
- src目录（项目源码）
    -  components 组件
    -  router 配置路由
    -  service 将接口统一进行管理
    -  store 仓库（使用mobx）
        - modules目录 放置仓库的模块
        - index.ts
    -  types 配置类型
    -  util 封装一些工具
        - request 封装axios拦截器 
        - saveToken 封装cookie的存取
    -  views 页面
    -  App.tsx
    -  index.tsx
- config目录
- scripts目录
- .babelrc #babel配置文件
- package.json 包管理文件
- tsconfig.json ts的一些配置
- tslint.json 修改ts的一些规则

##### index.ts
- 主入口文件
```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
```
配置
### tslint.json
```
{
  "defaultSeverity":"none",
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "linterOptions": {
    "exclude": [
      "config/**/*.js",
      "node_modules/**/*.ts",
      "coverage/lcov-report/*.js"
    ]
  },
  "rules":{
    "ordered-imports":[
      false,
      {
        "import-sources-order":"lowercase-last",
        "named-imports-order":"lowercase-first"
      }
    ],
    "no-console":false,
    "interface-name":[true,"never-prefix"],
    "jsx-self-close":false,
    "jsx-no-lambda":false,
    "object-literal-sort-keys":false,
    "member-access":false
  }
}
```
### tsconfig.json
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "build/dist",
    "module": "esnext",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "jsx": "react",
    "moduleResolution": "node",
    "rootDir": "src",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "importHelpers": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true
  },
  "exclude": [
    "node_modules",
    "build",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts"
  ]
}
```
## src目录
### router 配置路由
##### routerSetting.tsx
```
//路由页面的引入即配置 参考react配置路由列表

```
##### routerview.tsx

```
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
interface PropsInfo {
    routes: Array<object>
}
const RouterView = (props: PropsInfo) => {
    return <Switch>
        {props.routes.map((item: any, index: number) => {
            return item.path ? <Route key={index} path={item.path} render={(props) => {
                return item.children && item.children.length ? <item.component {...props}>
                    <RouterView routes={item.children} />
                </item.component> : <item.component {...props}></item.component>
            }}></Route> : <Redirect key={item.from} {...item}></Redirect>
        })}
    </Switch>
}
export default RouterView
```
### store 仓库
#### index.ts

```
// 引入子模块
import Login from './modules/login';
import Question from "./modules/question";
// 实例化模块
const login = new Login();
const question=new Question();
const user=new User();
export default {
    login,
    question,
    user,
}
```
##### modules/login.ts
-  以login.ts为例

```
//从mobx中引入observable, action
import {observable, action} from 'mobx'
//从接口管理文件引入axios请求的方法
import {loginInfo,getUserInfo} from '../../service/index'
//从工具目录引入操作cookie的方法
import {setToken,removeToken} from "../../util/saveToken"

let account={};

if(window.localStorage.getItem('account')){
    account=JSON.parse(window.localStorage.getItem('account')+'');
}
class Login{
    //定义属性
    @observable isLogin: boolean = false;
    @observable account:any=account;
    //定义方法 
    @action async login(form: any): Promise<any>{
        let result: any = await loginInfo(form);
        if(result.code===1){
            //1判断是否记住用户名和密码
            if(form.remember){
                  window.localStorage.setItem('account',JSON.stringify(form))
            }else{
                 window.localStorage.removeItem('account')
            }
           //2.判断是否七天免登陆
            if(form.autoLogin){
               setToken(result.token);
            }
        }
        return result;
    }
    //退出登录

    @action async loginOut():Promise<any>{
        removeToken();
    }
     //获取用户信息
   @action async getUserInfoAction(){
      
    let result = await getUserInfo()
    return result;
 }
}

export default Login;
```
#### 页面中使用mobx获取数据 
首先要在App.tsx中引入

##### App.tsx
```
import * as React from 'react';
import 'antd/dist/antd.css';
import RoutesView from "./router/router"
import {Provider} from 'mobx-react';
import store from './store'
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider {...store}>
          <RoutesView/>
        </Provider>
       
      </div>
    );
  }
}

export default App;
```
##### login.tsx
```
import {inject, observer} from 'mobx-react'
@inject('login','user') //注入mobx中的多个模块
@observer //转换成可观察的

//直接调用this.props.login.getUserInfoAction()
//即可触发modules/login.ts中的
//@action async getUserInfoAction。。。。
```
### util 目录 
- 封装工具类文件
#### request.ts
- 封装axios拦截器


```
import axios from 'axios';
import {AxiosResponse} from 'axios/index';
import {getToken} from "./saveToken";
import {message} from 'antd';

const instance = axios.create({
    baseURL: 'http://localhost:7001',
    timeout: 1000,
     headers: {'authorization': getToken()}
});

// 请求拦截器
instance.interceptors.request.use( (config) =>{
    // Do something before request is sent
    return config;
  }, (error)=> {
    // Do something with request error
    return Promise.reject(error);
  }
);
 
// 响应拦截器
instance.interceptors.response.use( (response: AxiosResponse<any>) =>{
    // Do something with response data
    if (response.status !== 200){
      message.error(response.statusText);
    }
    return response.data;
  },  (error) =>{
    // Do something with response error
    if (error.response.status && error.response.status !== 200){
      message.error(error.response.statusText);
    }else{
      // message.error(error.response);
    }
    return Promise.resolve(error);
  }
);

export default instance;
```
#### saveToken.ts
- 封装cookie的存取

```
import * as Cookie from 'js-cookie';

const key = 'authorization';
//从cookie中取值
export let getToken: ()=>any = ()=>{
    return Cookie.get(key);
};

export let setToken: (val: string)=>void = (val)=>{
    //设置七天免登陆
    Cookie.set(key, val, { expires: 7 });
};
//向cookie中存值
export let removeToken: ()=>void = ()=>{
    Cookie.remove(key);
};
```





