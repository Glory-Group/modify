import * as React from "react";
import { Layout } from 'antd';
import {inject, observer} from 'mobx-react'
 
const {   Content } = Layout;

@inject()
@observer

export class ContentForm extends React.Component {
    
    constructor(props:any){
       super(props)
    }

    public  render() {
        return (
          <Content>
            {this.props.children}
          </Content>
        )
    }
}

export default ContentForm
 