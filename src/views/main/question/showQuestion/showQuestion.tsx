import * as React from 'react'
import {inject, observer} from 'mobx-react'

@inject('question')
@observer

export class ShowQuestion extends React.Component {
    
    constructor(props:any){
       super(props)
       const {getQuestion}=props.question;
       getQuestion();
    }

    public  render() {
        return (
            <div>
                ShowQuestion
            </div>
        )
    }
}

export default ShowQuestion