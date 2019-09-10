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
let createTextPaper = Loadable({ loading: Loading, loader: () => import("../views/main/text/createTextPaper/createTextPaper") })
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
                "title": "menu.question",
                "type": "sliders",
                children: [
                    {
                        "title": "menu.question.addQuestion",
                        "id": 1,
                        component: addQuestion,
                        view_id: "main-addQuestions9999",
                        path: "/main/question/addQuestion"
                    },
                    {
                        component: showDetail,
                        view_id: "main-questionsDetail99",
                        path: "/main/question/detail/:id"
                    },
                    {
                        "title": "menu.question.viewQuestion",
                        "id": 3,
                        component: showQuestion,
                        view_id: "main-watchQuestions9999",
                        path: "/main/question/showQuestion"
                    }, {
                        "title": "menu.question.typeQuestion",
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
                "title": "menu.user",
                "type": "team",
                children: [{
                    "title": "menu.user.addUser",
                    "id": 4,
                    component: addUser,
                    path: "/main/user/addUser"
                }, {
                    "title": "menu.user.showUser",
                    "id": 5,
                    component: showUser,
                    path: "/main/user/showUser"
                }],
                component: user,
                path: "/main/user"

            },

            {
                "title": "menu.exam",
                "type": "schedule",
                component: text,
                path: "/main/text",
                children: [{
                    "title": "menu.exam.addExam",
                    "id": 6,
                    component: addText,
                    path: "/main/text/addText"
                }, {
                    "menu.exam.examList": "试卷列表",
                    "id": 7,
                    component: listText,
                    path: "/main/text/listText"
                }, {
                    component: createTextPaper,
                    path: "/main/text/createTextPaper"
                }],


            }, {
                "title": "menu.class",
                "type": "project",
                children: [{
                    "title": "menu.class.room",
                    "id": 9,
                    component: classRoom,
                    path: "/main/className/classRoom"
                },
                {
                    "title": "menu.class.grade",
                    "id": 8,
                    component: classType,
                    path: "/main/className/classType"
                }, {
                    "title": "menu.class.student",
                    "id": 10,
                    component: student,
                    path: "/main/className/student"
                }],
                component: className,
                path: "/main/className"

            }, {
                "title": "menu.marking",
                "type": "project",
                children: [{
                    "title": "menu.marking.wait",
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
        path: "/403",
        component: () => <div>403</div>
    }, {
        path: "/404",
        component: () => <div>404</div>
    }, {
        from: "/",
        to: "/login"
    }, {
        from: "*",
        to: "/404"
    }
]
export default routes