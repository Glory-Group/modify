webpackJsonp([14],{1133:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"Login",function(){return s});var o=n(37),t=n(0),i=(n.n(t),n(226)),a=n(225),l=n(1164),s=(n.n(l),function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.handleSubmit=function(e){e.preventDefault(),r.props.form.validateFields(function(e,n){return Object(o.b)(r,void 0,void 0,function(){var r,t,a;return Object(o.e)(this,function(o){switch(o.label){case 0:return e?[3,2]:(console.log("Received values of form: ",n),[4,this.props.login.login(n)]);case 1:r=o.sent(),t=r.code,a=r.msg,1===t?this.props.history.replace("/main"):i.s.error(a||"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"),o.label=2;case 2:return[2]}})})})},r}return Object(o.d)(r,e),r.prototype.render=function(){var e=this.props.form.getFieldDecorator,r=this.props.login.account,n=r.user_name,o=r.user_pwd;return t.createElement("div",{className:"login-wrapper"},t.createElement(i.h,{onSubmit:this.handleSubmit,className:"login-form"},t.createElement(i.h.Item,null,e("user_name",{validateTrigger:"onBlur",initialValue:n,rules:[{validator:function(e,r,n){console.log("value...",r),/[a-z]{5,20}/.test(r)?n():n("Please input valid username!")}}]})(t.createElement(i.j,{prefix:t.createElement(i.i,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),t.createElement(i.h.Item,null,e("user_pwd",{validateTrigger:"onBlur",initialValue:o,rules:[{validator:function(e,r,n){console.log("value...",r),/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(r)?n():n("Please input valid password!")}}]})(t.createElement(i.j,{prefix:t.createElement(i.i,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),t.createElement(i.h.Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(t.createElement(i.d,null,"Remember me"))),t.createElement(i.h.Item,null,e("autoLogin",{valuePropName:"checked",initialValue:!0})(t.createElement(i.d,null,"Auto login in theven days")),t.createElement("a",{className:"login-form-forgot",href:""},"Forgot password"),t.createElement(i.b,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",t.createElement("a",{href:""},"register now!"))))},r=Object(o.c)([Object(a.b)("login"),a.c],r)}(t.Component)),c=i.h.create({name:"normal_login"})(s);r.default=c},1164:function(e,r,n){var o=n(1165);"string"===typeof o&&(o=[[e.i,o,""]]);var t={hmr:!1,transform:void 0};n(1131)(o,t);o.locals&&(e.exports=o.locals)},1165:function(e,r,n){(e.exports=n(1130)(!0)).push([e.i,'.login-wrapper{position:absolute;top:0;bottom:0;width:100%;background-size:auto 100%;background:url("http://wx3.sinaimg.cn/crop.0.39.1146.637/6fdec1bdly1fyu9902gttj20vu0jwh4z.jpg") no-repeat;background-size:cover}.ant-layout-header{padding:0}.login-form{width:400px;padding:40px 20px;border:1px solid #ccc;border-radius:3px;background:hsla(0,0%,88%,.3);position:absolute;right:15%;top:25%;-webkit-box-sizing:border-box;box-sizing:border-box}.login-form-forgot{float:right}.login-form-button{width:100%}',"",{version:3,sources:["D:/\u5b66\u4e60/\u5b9e\u8bad\u4e00/\u9879\u76ee/Project/src/views/login/scss/index.css"],names:[],mappings:"AAAA,eACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,0BAA2B,AAC3B,0GAA2G,AAC3G,qBAAuB,CACxB,AAED,mBACE,SAAW,CACZ,AAED,YACE,YAAa,AACb,kBAAmB,AACnB,sBAAuB,AACvB,kBAAmB,AACnB,6BAAqC,AACrC,kBAAmB,AACnB,UAAW,AACX,QAAS,AACT,8BAA+B,AACvB,qBAAuB,CAChC,AAED,mBACE,WAAa,CACd,AAED,mBACE,UAAY,CACb",file:"index.css",sourcesContent:['.login-wrapper {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-size: auto 100%;\r\n  background: url("http://wx3.sinaimg.cn/crop.0.39.1146.637/6fdec1bdly1fyu9902gttj20vu0jwh4z.jpg") no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.ant-layout-header {\r\n  padding: 0;\r\n}\r\n\r\n.login-form {\r\n  width: 400px;\r\n  padding: 40px 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n  background: rgba(225, 225, 225, 0.3);\r\n  position: absolute;\r\n  right: 15%;\r\n  top: 25%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.login-form-forgot {\r\n  float: right;\r\n}\r\n\r\n.login-form-button {\r\n  width: 100%;\r\n}\r\n'],sourceRoot:""}])}});
//# sourceMappingURL=14.65e27470.chunk.js.map