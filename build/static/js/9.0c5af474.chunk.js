webpackJsonp([9],{1141:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"TypeQuestion",function(){return l});var s=n(37),i=n(0),o=(n.n(i),n(225)),r=n(226),a=n(1172),c=(n.n(a),[{title:"\u7c7b\u578b\u6392\u5e8f",dataIndex:"questions_type_sort",key:"questions_type_sort"},{title:"\u7c7b\u578bID",dataIndex:"questions_type_id",key:"questions_type_id"},{title:"\u7c7b\u578b\u540d\u79f0",dataIndex:"questions_type_text",key:"questions_type_text"}]),l=function(t){function e(e){var n=t.call(this,e)||this;return n.state={questionTypeList:[],text:"",ModalText:"Content of the modal",visible:!1,confirmLoading:!1},n.getList=function(){return Object(s.b)(n,void 0,void 0,function(){var t;return Object(s.e)(this,function(e){switch(e.label){case 0:return[4,this.props.question.questionType()];case 1:return 1===(t=e.sent()).code&&(t.data.map(function(t,e){return t.key=e}),this.setState({questionTypeList:t.data})),[2]}})})},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(t){t.preventDefault(),n.props.form.validateFields(function(t,e){return Object(s.b)(n,void 0,void 0,function(){var n,i,o=this;return Object(s.e)(this,function(s){switch(s.label){case 0:return t?[3,2]:(n={text:e.text,sort:this.state.questionTypeList.length&&this.state.questionTypeList.length+1},[4,this.props.question.addTypeAction(n)]);case 1:1===(i=s.sent()).code&&(r.s.info(i.msg),this.getList(),this.setState({confirmLoading:!0}),setTimeout(function(){o.setState({visible:!1,confirmLoading:!1})},2e3)),s.label=2;case 2:return[2]}})})})},n.handleCancel=function(){n.setState({visible:!1})},n.getList(),n}return Object(s.d)(e,t),e.prototype.render=function(){var t=this.state,e=t.questionTypeList,n=t.visible,s=t.confirmLoading,o=this.props.form.getFieldDecorator;return i.createElement("div",null,i.createElement("div",{className:"title"},"\u8bd5\u9898\u5206\u7c7b"),i.createElement("div",{className:"content-box"},i.createElement("div",null,i.createElement(r.b,{type:"primary",onClick:this.showModal,style:{margin:"10px"}},"\u6dfb\u52a0\u7c7b\u578b"),i.createElement(r.n,{title:"\u521b\u5efa\u65b0\u7c7b\u578b",visible:n,onOk:this.handleOk,confirmLoading:s,onCancel:this.handleCancel},i.createElement(r.h.Item,null,o("text",{rules:[{required:!0,message:"Userquestions typename!"}]})(i.createElement(r.j,{prefix:i.createElement(r.i,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Userquestions typename"}))))),i.createElement(r.q,{columns:c,dataSource:e})))},e=Object(s.c)([Object(o.b)("question"),o.c,Object(s.f)("design:paramtypes",[Object])],e)}(i.Component);e.default=r.h.create({name:"normal_login"})(l)},1172:function(t,e,n){var s=n(1173);"string"===typeof s&&(s=[[t.i,s,""]]);var i={hmr:!1,transform:void 0};n(1131)(s,i);s.locals&&(t.exports=s.locals)},1173:function(t,e,n){(t.exports=n(1130)(!0)).push([t.i,".mask{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.5)}.mask-content{width:600px;height:275px;background:#fff;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}","",{version:3,sources:["C:/Users/g/Desktop/\u5b9e\u8bad/practice/\u9879\u76ee/modify/modify/src/views/main/question/typeQuestion/scss/style.css"],names:[],mappings:"AAAA,MACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,+BAAqC,CACtC,AAED,cACE,YAAa,AACb,aAAc,AACd,gBAAiB,AACjB,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,uCAAyC,AACrC,mCAAqC,AACjC,8BAAiC,CAC1C",file:"style.css",sourcesContent:[".mask {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.mask-content {\r\n  width: 600px;\r\n  height: 275px;\r\n  background: #fff;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n      -ms-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=9.0c5af474.chunk.js.map