import * as React from 'react'

export class Text extends React.Component {
    public  render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default Text