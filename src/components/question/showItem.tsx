import * as React from "react";

import {inject, observer} from 'mobx-react'


@inject()
@observer

export class Head extends React.Component {
    
    constructor(props:any){
       super(props)
    }

    public  render() {
        return (
          <div className="show-item"></div>
        )
    }
}

export default Head
 