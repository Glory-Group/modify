import * as React from 'react'

export class Text extends React.Component {
    public  render() {
        return (
            <div>
                text
                {this.props.children}
            </div>
        )
    }
}

export default Text