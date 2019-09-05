import * as React from 'react';
import { observer, inject } from "mobx-react"
@inject('question')
@observer
class CheckQuestion extends React.Component {
  constructor(props: any) {
    super(props)
    const { getQusetion } = props.question;
    getQusetion()
  }
  
  public render() {
 
  return (
    <div className="content">
      
        查看试题

    </div>
  );
}


}

export default CheckQuestion;