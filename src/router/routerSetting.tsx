import * as  React from 'react'
import Loadable from "react-loadable"
function Loading() {
    return (
        <div>...Loading</div>
    )
}

let main = Loadable({ loading: Loading, loader: () => import("../views/main/main") })
let login = Loadable({ loading: Loading, loader: () => import("../views/login/login") })
let className = Loadable({ loading: Loading, loader: () => import("../views/main/className/class") })
let marking = Loadable({ loading: Loading, loader: () => import("../views/main/marking/marking") })
let question = Loadable({ loading: Loading, loader: () => import("../views/main/question/question") })
let text = Loadable({ loading: Loading, loader: () => import("../views/main/text/text") })
let user = Loadable({ loading: Loading, loader: () => import("../views/main/user/user") })
let addQuestion = Loadable({ loading: Loading, loader: () => import("../views/main/question/addQuestion/addQuestion") })
let showQuestion = Loadable({ loading: Loading, loader: () => import("../views/main/question/showQuestion/showQuestion") })
let typeQuestion = Loadable({ loading: Loading, loader: () => import("../views/main/question/typeQuestion/typeQuestion") })
let classRoom = Loadable({ loading: Loading, loader: () => import("../views/main/className/classRoom/classRoom") })
let classType = Loadable({ loading: Loading, loader: () => import("../views/main/className/classType/classType") })
let student = Loadable({ loading: Loading, loader: () => import("../views/main/className/student/student") })
let watingClass = Loadable({ loading: Loading, loader: () => import("../views/main/marking/watingClass/watingClass") })
let addText = Loadable({ loading: Loading, loader: () => import("../views/main/text/addText/addText") })
let listText = Loadable({ loading: Loading, loader: () => import("../views/main/text/listText/listText") })
let addUser = Loadable({ loading: Loading, loader: () => import("../views/main/user/addUser/addUser") })
let showUser = Loadable({ loading: Loading, loader: () => import("../views/main/user/showUser/showUser") })
let showDetail = Loadable({ loading: Loading, loader: () => import("../views/main/question/showQuestion/detail/index") })
let classMate = Loadable({ loading: Loading, loader: () => import("../views/main/marking/classMate/index") })
let routes = [
    {
        component: login,
        path: "/login"

    },
    {
        children: [
            {
                "title": "试题管理",
                "type": "sliders",
                children: [
                    {
                        "title": "添加试题",
                        "id": 1,
                        component: addQuestion,
                        view_id: "main-addQuestions9999",
                        path: "/main/question/addQuestion"
                    },
                    , {
                        component: showDetail,
                        view_id:"main-questionsDetail99",
                        path: "/main/question/detail/:id"
                    },
                    {
                        "title": "查看试题",
                        "id": 3,
                        component: showQuestion,
                        view_id: "main-watchQuestions9999",
                        path: "/main/question/showQuestion"
                    }, {
                        "title": "试题分类",
                        "id": 2,
                        component: typeQuestion,
                        view_id: "main-questionsType",
                        path: "/main/question/typeQuestion"
                    }
                ],
                component: question,
                path: "/main/question"

            },
            {
                "title": "用户管理",
                "type": "team",
                children: [{
                    "title": "添加用户",
                    "id": 4,
                    component: addUser,
                    path: "/main/user/addUser"
                }, {
                    "title": "用户展示",
                    "id": 5,
                    component: showUser,
                    path: "/main/user/showUser"
                }],
                component: user,
                path: "/main/user"

            },
            
            {
                "title": "考试管理",
                "type": "schedule",
                children: [{
                    "title": "添加考试",
                    "id": 6,
                    component: addText,
                    path: "/main/text/addText"
                }, {
                    "title": "试卷列表",
                    "id": 7,
                    component: listText,
                    path: "/main/text/listText"
                }],
                component: text,
                path: "/main/text"

            },{
                "title": "班级管理",
                "type": "project",
                children: [{
                    "title": "教室管理",
                    "id": 9,
                    component: classRoom,
                    path: "/main/className/classRoom"
                },
                {
                    "title": "班级管理",
                    "id": 8,
                    component: classType,
                    path: "/main/className/classType"
                }, {
                    "title": "学生管理",
                    "id": 10,
                    component: student,
                    path: "/main/className/student"
                }],
                component: className,
                path: "/main/className"

            },  {
                "title": "阅卷管理",
                "type":"project",
                children: [{
                    "title": "待批班级",
                    "id": 11,
                    component: watingClass,
                    path: "/main/marking/watingClass"
                }, {
                    component: classMate,
                    path: "/main/marking/classMate/:id"
                }],
                component: marking,
                path: "/main/marking"

            }
        ],
        component: main,
        path: "/main"
    }, {
        path:"/403",
        component:()=><div>403</div>
    },{
        path:"/404",
        component:()=><div>404</div>
    },{
        from: "/",
        to: "/login"
    },{
        from:"*",
        to:"/404"
    }
]
export default routes