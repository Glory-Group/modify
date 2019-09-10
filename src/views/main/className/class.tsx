import * as React from 'react'

export class ClassName extends React.Component {
    public  render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ClassName