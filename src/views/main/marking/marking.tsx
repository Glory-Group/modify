import * as React from 'react'

export class Marking extends React.Component {
    public   render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Marking