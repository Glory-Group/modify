webpackJsonp([10],{1140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"ShowQuestion",function(){return l});var r=n(37),A=n(0),s=(n.n(A),n(225)),o=n(226),a=n(1170),i=(n.n(a),o.p.Option),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={dataList:[],subjectList:[],examType:[],questionType:[],count:-1,searchType:{subjectType:"",textType:"",questionType:""}},n.getList=function(){return Object(r.b)(n,void 0,void 0,function(){var e,t,n,A;return Object(r.e)(this,function(r){switch(r.label){case 0:return[4,this.props.question.getQuestion()];case 1:return e=r.sent(),[4,this.props.question.getSubject()];case 2:return t=r.sent(),[4,this.props.question.getType()];case 3:return n=r.sent(),[4,this.props.question.questionType()];case 4:return A=r.sent(),1===e.code?this.setState({dataList:e.data}):o.s.error(e.msg),1===t.code?this.setState({subjectList:t.data}):o.s.error(t.msg),1===n.code?this.setState({examType:n.data}):o.s.error(n.msg),1===A.code?this.setState({questionType:A.data}):o.s.error(A.msg),[2]}})})},n.searchList=function(){return Object(r.b)(n,void 0,void 0,function(){var e,t,n,A,s,o;return Object(r.e)(this,function(r){switch(r.label){case 0:return e=this.state.searchType,t=e.subjectType,n=e.textType,A=e.questionType,[4,this.props.question.getQuestion()];case 1:return s=r.sent(),"All"===e.subjectType?this.setState({dataList:s.data}):(o=[],t&&n&&A?o=s.data.filter(function(e){return e.subject_text===t&&e.exam_name===n&&e.questions_type_text===A}):t&&n?o=s.data.filter(function(e){return e.subject_text===t&&e.exam_name===n}):t&&A?o=s.data.filter(function(e){return e.subject_text===t&&e.questions_type_text===A}):n&&A?o=s.data.filter(function(e){return e.exam_name===n&&e.questions_type_text===A}):(n||t||A)&&(o=s.data.filter(function(e){return e.subject_text===t||e.exam_name===n||e.questions_type_text===A})),this.setState({dataList:o})),[2]}})})},n.handleText=function(e){return Object(r.b)(n,void 0,void 0,function(){var t;return Object(r.e)(this,function(n){return(t=this.state.searchType).textType=e,this.setState({searchType:t}),[2]})})},n.handleQuestion=function(e){return Object(r.b)(n,void 0,void 0,function(){var t;return Object(r.e)(this,function(n){return(t=this.state.searchType).questionType=e,this.setState({searchType:t}),[2]})})},n.changeBg=function(e,t){var r=n.state.searchType;"All"===e?(r.subjectType="All",n.setState({searchType:r})):(n.setState({count:t}),r.subjectType=e,n.setState({searchType:r}))},n.getList(),n.changeBg(),n}return Object(r.d)(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.dataList,r=t.subjectList,s=t.examType,a=t.questionType,l=t.count,c=this.props.history;return A.createElement("div",{className:"wrap"},A.createElement("div",{className:"title"},"\u67e5\u770b\u8bd5\u9898"),A.createElement("div",{className:"content-box"},A.createElement("div",{className:"show-top"},A.createElement("div",{className:"subject-top"},A.createElement("label",{htmlFor:""},"\u8bfe\u7a0b\u7c7b\u578b"),A.createElement("div",{className:"subject-list",ref:"subject"},A.createElement("div",null,A.createElement("span",{className:"subject-all",onClick:function(){e.changeBg("All")}},"All")),r&&r.map(function(t,n){return A.createElement("div",{key:n},A.createElement("span",{className:l===n?"active":"subject-item",onClick:function(){e.changeBg(t.subject_text,n)}},t.subject_text))}))),A.createElement("div",{className:"subject-bottom"},A.createElement("div",{className:"bottom-item"},A.createElement("label",{htmlFor:""},"\u8003\u8bd5\u7c7b\u578b"),A.createElement("div",{className:"exam-type"},A.createElement(o.p,{defaultValue:"",onChange:this.handleText,style:{width:"80%",margin:"0 11px",height:30}},s&&s.map(function(e,t){return A.createElement(i,{value:e.exam_name,key:t},e.exam_name)})))),A.createElement("div",{className:"bottom-item"},A.createElement("label",{htmlFor:""},"\u9898\u76ee\u7c7b\u578b"),A.createElement("div",{className:"exam-type"},A.createElement(o.p,{defaultValue:"",onChange:this.handleQuestion,style:{width:"80%",margin:"0 11px",height:30}},a&&a.map(function(e,t){return A.createElement(i,{value:e.questions_type_text,key:t},e.questions_type_text)})))),A.createElement("div",{className:"bottom-item"},A.createElement(o.b,{type:"primary",icon:"search",style:{width:130,height:32,background:"linear-gradient(-90deg,#4e75ff,#0139fd)"},onClick:this.searchList},"\u67e5\u8be2")),A.createElement("div",{className:"bottom-item"}))),A.createElement("div",{className:"show-bottom"},A.createElement("div",{className:"bottom-content"},n&&n.map(function(t,n){return A.createElement("div",{className:"show-item",key:n},A.createElement("div",{className:"left",onClick:function(){c.push("/main/question/detail/"+t.questions_id)}},A.createElement("div",{style:{margin:"0 0 4px"}}," ",A.createElement("span",{style:{color:"rgba(0,0,0,0.65)"}},t.title)," "),A.createElement("div",{style:{margin:"10px 0"}},A.createElement("span",{style:{color:"#1890ff",background:"#e6f7ff",border:"1px solid #91d5ff",margin:"0 8px 0 0",padding:"0 7px"}},t.questions_type_text),A.createElement("span",{style:{color:"#2f54eb",background:"#f0f5ff",border:"1px solid #adc6ff",margin:"0 8px 0 0",padding:"0 7px"}},t.subject_text),A.createElement("span",{style:{color:"#fa8c16",background:" #fff7e6",border:"1px solid #ffd591",margin:"0 8px 0 0",padding:"0 7px"}},t.exam_name)),A.createElement("div",{style:{color:"#0139fd"}},t.user_name,"\u53d1\u5e03")),A.createElement("div",{className:"right"},A.createElement("span",{style:{color:"#0139fd"},onClick:function(){e.props.history.push("/main/question/editQuestion/"+t.questions_id)}},"\u7f16\u8f91")))})))))},t=Object(r.c)([Object(s.b)("question"),s.c,Object(r.f)("design:paramtypes",[Object])],t)}(A.Component);t.default=l},1170:function(e,t,n){var r=n(1171);"string"===typeof r&&(r=[[e.i,r,""]]);var A={hmr:!1,transform:void 0};n(1131)(r,A);r.locals&&(e.exports=r.locals)},1171:function(e,t,n){(e.exports=n(1130)(!0)).push([e.i,".question{width:100%;height:100%;padding:0 24px 24px}.wrap{width:100%;height:100%}.show-top,.wrap{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.show-top{background:#fff;padding:24px;margin:0 0 20px;border-radius:10px;height:184px}.show-top .subject-top{width:100%;height:63px;display:-ms-flexbox;display:flex;padding:0 20px}.show-top .subject-top label{-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.show-top .subject-top .subject-list{-ms-flex:9 1;flex:9 1;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.show-top .subject-top .subject-list div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.show-top .subject-top .subject-list .subject-all{font-size:12px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0 10px;padding:0 2px}.show-top .subject-top .subject-list .subject-all:hover{color:#0139fd}.show-top .subject-top .subject-list .subject-item{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:12px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0 10px;padding:0 2px}.show-top .subject-top .subject-list .subject-item:hover{color:#0139fd}.show-top .subject-top .subject-list .active{background:#0139fd;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:12px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0 10px;padding:0 2px}.show-top .subject-bottom{width:100%;display:-ms-flexbox;display:flex;height:63px}.show-top .subject-bottom .bottom-item{display:-ms-flexbox;display:flex;height:100%;-ms-flex:1 1;flex:1 1;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;padding:0 20px}.show-top .subject-bottom .bottom-item label{-ms-flex:3 1;flex:3 1;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;height:30px;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.show-top .subject-bottom .bottom-item .exam-type{-ms-flex:7 1;flex:7 1;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.show-top .subject-bottom .bottom-item Button{background:-webkit-gradient(linear,right top,left top,from(#4e75ff),to(#0139fd))!important;background:-webkit-linear-gradient(right,#4e75ff,#0139fd)!important;background:-o-linear-gradient(right,#4e75ff,#0139fd)!important;background:linear-gradient(-90deg,#4e75ff,#0139fd)!important}.show-bottom{background:#fff;padding:24px;margin:0 0 20px;border-radius:10px;display:-ms-flexbox;display:flex}.bottom-content{-ms-flex-direction:column;flex-direction:column}.bottom-content,.bottom-content .show-item{width:100%;display:-ms-flexbox;display:flex}.bottom-content .show-item{height:114px;padding:12px 0;border-bottom:1px solid #e8e8e8;-ms-flex-align:center;align-items:center}.bottom-content .show-item:hover{background:#f0f5ff}.bottom-content .show-item .left{-ms-flex:9 1;flex:9 1;height:89px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.bottom-content .show-item .right{-ms-flex:1 1;flex:1 1;height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}","",{version:3,sources:["D:/\u5b66\u4e60/\u5b9e\u8bad\u4e00/\u9879\u76ee/Project/src/views/main/question/showQuestion/scss/index.css"],names:[],mappings:"AAAA,UACE,WAAY,AACZ,YAAa,AACb,mBAAqB,CACtB,AAED,MACE,WAAY,AACZ,WAAa,CAKd,AAED,gBANE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAa5B,AAVD,UACE,gBAAkB,AAClB,aAAc,AACd,gBAAqB,AACrB,mBAAoB,AACpB,YAAc,CAKf,AAED,uBACE,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,cAAgB,CACjB,AAED,6BACE,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CACzB,AAED,qCACE,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,cAAgB,CACrB,AAED,yCACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CACzB,AAED,kDACE,eAAgB,AAChB,qBAAsB,AAClB,iBAAkB,AACtB,cAAe,AACf,aAAe,CAChB,AAED,wDACE,aAAe,CAChB,AAED,mDACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,eAAgB,AAChB,qBAAsB,AAClB,iBAAkB,AACtB,cAAe,AACf,aAAe,CAChB,AAED,yDACE,aAAe,CAChB,AAED,6CACE,mBAAoB,AACpB,WAAa,AACb,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,eAAgB,AAChB,qBAAsB,AAClB,iBAAkB,AACtB,cAAe,AACf,aAAe,CAChB,AAED,0BACE,WAAY,AACZ,oBAAqB,AACrB,aAAc,AACd,WAAa,CACd,AAED,uCACE,oBAAqB,AACrB,aAAc,AACd,YAAa,AACb,aAAc,AACV,SAAU,AACd,oBAAqB,AACjB,2BAA4B,AAChC,sBAAuB,AACnB,mBAAoB,AACxB,cAAgB,CACjB,AAED,6CACE,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACf,yBAA0B,AAC9B,sBAAuB,AACnB,mBAAoB,AACxB,YAAa,AACb,qBAAsB,AAClB,gBAAkB,CACvB,AAED,kDACE,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACjB,2BAA4B,AAChC,sBAAuB,AACnB,kBAAoB,CACzB,AAED,8CACE,2FAAiG,AACjG,oEAAwE,AACxE,+DAAmE,AACnE,4DAAiE,CAClE,AAED,aACE,gBAAkB,AAClB,aAAc,AACd,gBAAqB,AACrB,mBAAoB,AACpB,oBAAqB,AACrB,YAAc,CACf,AAED,gBAIE,0BAA2B,AACvB,qBAAuB,CAC5B,AAED,2CAPE,WAAY,AACZ,oBAAqB,AACrB,YAAc,CAcf,AATD,2BAEE,aAAc,AACd,eAAgB,AAChB,gCAAiC,AAGjC,sBAAuB,AACnB,kBAAoB,CACzB,AAED,iCACE,kBAAoB,CACrB,AAED,iCACE,aAAc,AACV,SAAU,AACd,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAC5B,AAED,kCACE,aAAc,AACV,SAAU,AACd,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,sBAAwB,CAC7B",file:"index.css",sourcesContent:[".question {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0 24px 24px;\r\n}\r\n\r\n.wrap {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n\r\n.show-top {\r\n  background: white;\r\n  padding: 24px;\r\n  margin: 0px 0px 20px;\r\n  border-radius: 10px;\r\n  height: 184px;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n\r\n.show-top .subject-top {\r\n  width: 100%;\r\n  height: 63px;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 0 20px;\r\n}\r\n\r\n.show-top .subject-top label {\r\n  -ms-flex: 1 1;\r\n      flex: 1 1;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.show-top .subject-top .subject-list {\r\n  -ms-flex: 9 1;\r\n      flex: 9 1;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.show-top .subject-top .subject-list div {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.show-top .subject-top .subject-list .subject-all {\r\n  font-size: 12px;\r\n  -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n  margin: 0 10px;\r\n  padding: 0 2px;\r\n}\r\n\r\n.show-top .subject-top .subject-list .subject-all:hover {\r\n  color: #0139fd;\r\n}\r\n\r\n.show-top .subject-top .subject-list .subject-item {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  font-size: 12px;\r\n  -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n  margin: 0 10px;\r\n  padding: 0 2px;\r\n}\r\n\r\n.show-top .subject-top .subject-list .subject-item:hover {\r\n  color: #0139fd;\r\n}\r\n\r\n.show-top .subject-top .subject-list .active {\r\n  background: #0139fd;\r\n  color: white;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  font-size: 12px;\r\n  -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n  margin: 0 10px;\r\n  padding: 0 2px;\r\n}\r\n\r\n.show-top .subject-bottom {\r\n  width: 100%;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 63px;\r\n}\r\n\r\n.show-top .subject-bottom .bottom-item {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n  -ms-flex: 1 1;\r\n      flex: 1 1;\r\n  -ms-flex-pack: start;\r\n      justify-content: flex-start;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  padding: 0 20px;\r\n}\r\n\r\n.show-top .subject-bottom .bottom-item label {\r\n  -ms-flex: 3 1;\r\n      flex: 3 1;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: end;\r\n      justify-content: flex-end;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  height: 30px;\r\n  -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n}\r\n\r\n.show-top .subject-bottom .bottom-item .exam-type {\r\n  -ms-flex: 7 1;\r\n      flex: 7 1;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: start;\r\n      justify-content: flex-start;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.show-top .subject-bottom .bottom-item Button {\r\n  background: -webkit-gradient(linear, right top, left top, from(#4e75ff), to(#0139fd)) !important;\r\n  background: -webkit-linear-gradient(right, #4e75ff, #0139fd) !important;\r\n  background: -o-linear-gradient(right, #4e75ff, #0139fd) !important;\r\n  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;\r\n}\r\n\r\n.show-bottom {\r\n  background: white;\r\n  padding: 24px;\r\n  margin: 0px 0px 20px;\r\n  border-radius: 10px;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.bottom-content {\r\n  width: 100%;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n\r\n.bottom-content .show-item {\r\n  width: 100%;\r\n  height: 114px;\r\n  padding: 12px 0;\r\n  border-bottom: 1px solid #e8e8e8;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.bottom-content .show-item:hover {\r\n  background: #f0f5ff;\r\n}\r\n\r\n.bottom-content .show-item .left {\r\n  -ms-flex: 9 1;\r\n      flex: 9 1;\r\n  height: 89px;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n\r\n.bottom-content .show-item .right {\r\n  -ms-flex: 1 1;\r\n      flex: 1 1;\r\n  height: 22px;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=10.6a6cb511.chunk.js.map