import * as React from 'react'
import "./scss/index.css"
export class Question extends React.Component {
    public  render() {
        return (
            <div className="question">
                {this.props.children}
            </div>
        )
    }
}

export default Question