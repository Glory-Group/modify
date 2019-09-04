import * as React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

interface PropsInfo {
    routes: Array<object>
}

class RouterView extends React.Component<PropsInfo> {

    render() {
        const { routes } = this.props
        let routeArr = routes.filter((item:any) => item.path)
        let redirectArr = routes.filter((item:any) => item.from).map((re:any, index:any) => <Redirect
            {...re} key={index} />)
        return <Switch>
         
            {routeArr.map((item:any, ind:any) => <Route key={ind} path={item.path} render={(props) =>
                {
                    return <item.component routes={item.children} {...props}></item.component>
                }
            }></Route>).concat(redirectArr)}

        </Switch>
    }

}

 export default RouterView