

import Home from "../views/home/index"
import Login from "../views/login/index"
import CheckQuestion from "../views/home/checkQuestion"
const routes = [
    {
        component: Home,
        path: "/home",
        children: [
            {
                component: CheckQuestion,
                path: "/home/checkQuestion"
            },
            {
                from: "/home",
                to: "/home/checkQuestion"
            }
        ]

    },
    {
        component: Login,
        path: "/login",

    },
    {
        from: "/",
        to: "/login"
    }
]
export default routes;