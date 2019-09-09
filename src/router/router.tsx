import * as React from "react"
import RouterView from "./routerview"
import routes from "./routerSetting"
import store from "../store/index"
import {filterView} from "../util/permission"
const myRoutes = filterView(routes,store.user.viewAuthority);


interface PropsInfo{
    routes:Array<object>
}

class RoutesView extends React.Component<PropsInfo> {

  public render() {
        let {routes}=this.props
        return (
            <RouterView routes={routes}></RouterView>
        )
    }
}
export default RoutesView