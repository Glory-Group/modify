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



## 登录
1.在路由页面进行表单校验 （正则 非空）

2.登陆成功：

- 判断是否记住密码
    - 记住密码：将用户名、密码进行本地存储；取出本地存储中的值，赋值给表单的用户名和密码作为默认值 
    - 不记住密码：将用户密码从本地存储中移除

- 判断是否7天免登陆
    - 免登陆：将token存入cookie中,并且将cookie中的‘authorization’通过请求头发送给服务端

- 退出登录
    - 将token从cookie中移除 


util/saveToken.ts
```
import * as Cookie from 'js-cookie';

const key = 'authorization';
//取token
export let getToken: ()=>any = ()=>{
    return Cookie.get(key);
};

//存token 并且设置7天免登陆
export let setToken: (val: string)=>void = (val)=>{
    Cookie.set(key, val, { expires: 7 });
};

//移除token
export let removeToken: ()=>void = ()=>{
    Cookie.remove(key);
};
```

```
const instance = axios.create({
    baseURL: 'http://localhost:7001',
    timeout: 1000,
    //将存入cookie中的值取出并传给服务端
    headers: {'authorization': getToken()}
});
```






