import React from "react"
import {BrowserRouter} from "react-router-dom"
import routes from "./routes"
import RouterView from "./routerview"

function Router(){ 
    return <BrowserRouter>
       <RouterView routes={routes}/>
    </BrowserRouter>
 }
 export default Router;