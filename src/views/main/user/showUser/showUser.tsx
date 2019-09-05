import * as React from 'react'
import { observer, inject } from "mobx-react"
interface propsInfo {
    user: any
}
@inject("user")
@observer
export class ShowQuestion extends React.Component<propsInfo> {
    state = {
        dataList: []
    }
    constructor(props: any) {
        super(props)
        this.getUserList()

    }
    getUserList = async () => {
        let result = await this.props.user.getUserAction()
        console.log(result.data)
        if (result.code === 1) {
            this.setState({
                dataList: result.data
            })
        }
    }
    public render() {
        let { dataList } = this.state
        return (
            <div>
               用户展示
                {
                    dataList.length && dataList.map((item: any, index: number) =>
                        <div key={index}>
                            {item.user_name}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ShowQuestion