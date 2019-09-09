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
let createTextPaper=Loadable({loading:Loading,loader:()=>import("../views/main/text/createTextPaper/createTextPaper")})
let addUser = Loadable({ loading: Loading, loader: () => import("../views/main/user/addUser/addUser") })
let showUser = Loadable({ loading: Loading, loader: () => import("../views/main/user/showUser/showUser") })
let showDetail=Loadable({loading:Loading,loader:()=>import("../views/main/question/showQuestion/detail/index")})
let classMate=Loadable({loading:Loading,loader:()=>import("../views/main/marking/classMate/index")})
let routes = [
    {
        component: login,
        path: "/login"

    },
    {
        children: [
            {
                children:[{
                    component:classRoom,
                    path:"/main/className/classRoom"
                },
                {
                    component:classType,
                    path:"/main/className/classType"
                },{
                    component:student,
                    path:"/main/className/student"
                }],
                component: className,
                path: "/main/className"

            }, {
                children:[{
                    component:watingClass,
                    path:"/main/marking/watingClass"
                },{
                    component:classMate,
                    path:"/main/marking/classMate/:id"
                }],
                component: marking,
                path: "/main/marking"

            }, {
                children: [
                    {
                        component: addQuestion,
                        path: "/main/question/addQuestion"
                    },
                    ,{
                        component:showDetail,
                        path:"/main/question/detail/:id"
                    },
                    {
                        component: showQuestion,
                        path: "/main/question/showQuestion"
                    }, {
                        component: typeQuestion,
                        path: "/main/question/typeQuestion"
                    }
                ],
                component: question,
                path: "/main/question"

            },
            {
                children:[{
                    component:addText,
                    path:"/main/text/addText"
                },{
                    component:listText,
                    path:"/main/text/listText"
                },{
                    component:createTextPaper,
                    path:"/main/text/createTextPaper"
                }],
                component: text,
                path: "/main/text"

            }, {
                children:[{
                    component:addUser,
                    path:"/main/user/addUser"
                },{
                    component:showUser,
                    path:"/main/user/showUser"
                }],
                component: user,
                path: "/main/user"

            }, {
                from: "/main",
                to: "/main/question"
            }
        ],
        component: main,
        path: "/main"
    },  {
        from: "/",
        to: "/login"
    }
]
export default routes