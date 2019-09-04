import * as React from 'react'

export class Question extends React.Component {
    public  render() {
        return (
            <div>
                question
                {this.props.children}
            </div>
        )
    }
}

export default Question