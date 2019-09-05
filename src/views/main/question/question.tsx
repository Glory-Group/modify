import * as React from 'react'
import RouterView from "../../../router/routerview"
import "../../../assets/question/index.css"
export class Question extends React.Component {
    public  render() {
        return (
            <div className="question">
                
                {/* <RouterView routes={this.props['routes']}/> */}
                {this.props.children}
            </div>
        )
    }
}

export default Question