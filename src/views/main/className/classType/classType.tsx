import * as React from 'react'

export class ClassType extends React.Component {
    public  render() {
        return (
            <div>
                ClassType
                {this.props.children}
            </div>
        )
    }
}

export default ClassType