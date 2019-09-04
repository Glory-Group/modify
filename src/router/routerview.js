import React, { Component } from "react"
import { Route, Redirect, Switch,  } from "react-router-dom"
class RouterView extends Component {

    render() {
        const { routes } = this.props
        return (
          
                <Switch>
                    {routes.map((item, index) => {
                        return !item.redirect ? <Route key={index} path={item.path} render={(props) => {
                            return item.children ? <item.component {...props}> <RouterView routes={item.children} {...props}></RouterView> </item.component> : <item.component {...props}></item.component>
                        }}></Route> : <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
                    })}
                </Switch>

        )
    }

}

export default RouterView