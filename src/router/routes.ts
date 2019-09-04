

import Home from "../views/home/index"
import Login from "../views/login/index"

const routes = [
    {
        component: Home,
        path: "/home",

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