import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

interface PropsInfo {
    routes: Array<object>
}


const RouterView = (props:PropsInfo) => {

    return <Switch>
            {props.routes.map((item:any, index:number) => {
                    return item.path?<Route key={index} path={item.path} render={(props)=>{
                            return item.children&&item.children.length?<item.component {...props}>
                                    <RouterView routes={item.children}/>
                            </item.component>:<item.component {...props}></item.component>
                    }}></Route>:<Redirect key={item.from} {...item}></Redirect>
            })}
    </Switch>
}

export default RouterView
// import * as React from 'react';
// import {Switch, Redirect, Route} from 'react-router-dom';

// interface PropsInfo {
//     routes: Array<object>
// }

// class RouterView extends React.Component<PropsInfo> {

//     render() {
//         const { routes } = this.props
//         let routeArr = routes.filter((item:any) => item.path)
//         let redirectArr = routes.filter((item:any) => item.from).map((re:any, index:any) => <Redirect
//             {...re} key={index} />)
//         return <Switch>
         
//             {routeArr.map((item:any, ind:any) => <Route key={ind} path={item.path} render={(props) =>
//                 {
//                     return <item.component routes={item.children} {...props}></item.component>
//                 }
//             }></Route>).concat(redirectArr)}

//         </Switch>
//     }

// }

//  export default RouterView