import * as React from 'react'

export class User extends React.Component {
    public  render() {
        return (
            <div>
                user
                {this.props.children}
            </div>
        )
    }
}

export default User