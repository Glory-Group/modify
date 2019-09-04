import React, { Component } from "react"
import {BrowserRouter} from "react-router-dom"
import RouterView from "./routerview"
import routes from "./routerSetting"
class RoutesView extends Component {

    render() {
        return <BrowserRouter>
               <RouterView routes={routes}></RouterView>
        </BrowserRouter>
    }



}
export default RoutesView