import * as React from 'react'
import { observer, inject } from "mobx-react"
import { Table } from 'antd';
import "./scss/style.css"
interface propsInfo {
    user: any
}

@inject("user")
@observer

export class ShowQuestion extends React.Component<propsInfo> {
    state = {
        list: [
            {
                type: 0,
                tabTitle: "用户数据",
                children: [
                    {
                        title: '用户名',
                        dataIndex: "user_name",
                        key: "user_name"
                    },
                    {
                        title: '密码',
                        dataIndex: "user_pwd",
                        key: "user_pwd"
                    },
                    {
                        title: '身份',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    }
                ],
                url: "/user/user"
            },
            {
                type: 1,
                tabTitle: "身份数据",
                children: [
                    {
                        title: '身份名称',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    }
                ],
                url: "/user/identity"
            },
            {
                type: 2,
                tabTitle: "API接口权限",
                children: [
                    {
                        title: 'api权限名称',
                        dataIndex: "api_authority_text",
                        key: "api_authority_text"
                    },
                    {
                        title: 'api权限url',
                        dataIndex: "api_authority_url",
                        key: "api_authority_url"
                    },
                    {
                        title: 'api权限方法',
                        dataIndex: "api_authority_method",
                        key: "api_authority_method"
                    }
                ],
                url: "/user/api_authority"
            },
            {
                type: 3,
                tabTitle: "身份和api接口关系",
                children: [
                    {
                        title: '身份名称',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    },
                    {
                        title: 'api权限名称',
                        dataIndex: "api_authority_text",
                        key: "api_authority_text"
                    },
                    {
                        title: 'api权限url',
                        dataIndex: "api_authority_url",
                        key: "api_authority_url"
                    },
                    {
                        title: 'api权限方法',
                        dataIndex: "api_authority_method",
                        key: "api_authority_method"
                    }
                ],
                url: '/user/identity_api_authority_relation'
            },
            {
                type: 4,
                tabTitle: "视图接口权限",
                children: [
                    {
                        title: '视图权限名称',
                        dataIndex: "view_authority_text",
                        key: "view_authority_text"
                    },
                    {
                        title: '视图id',
                        dataIndex: "view_id",
                        key: "view_id"
                    }
                ],
                url: '/user/view_authority'
            },
            {
                type: 5,
                tabTitle: "身份和视图权限关系",
                children: [

                    {
                        title: '身份',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    },
                    {
                        title: '视图名称',
                        dataIndex: "view_authority_text",
                        key: "view_authority_text"
                    },
                    {
                        title: '视图id',
                        dataIndex: "view_id",
                        key: "view_id"
                    }
                ],
                url: "/user/identity_view_authority_relation"
            }
        ],
        dataList: [],
        columns: [],
        tabType: 0,
        tabTitle:""
    }
    constructor(props: any) {
        super(props)
        this.getUserList(this.state.tabType, "/user/user")

    }
    getUserList = async (type: number, url: string) => {
        let result = await this.props.user.getTabAction(url)
        if (result.code === 1) {
            result.data.map((item: any, index: number) => item.key = index)
            this.setState({
                dataList: result.data,
                columns: this.state.list[type].children,
                tabTitle: this.state.list[type].tabTitle
            })
        }
    }
    changeTab = (type: number, url: string,tabTitle:string) => {
        this.setState({
            tabType: type,
        })
        this.getUserList(type, url)
        let { dataList, list } = this.state
        let listItem = list.filter(item => item.type === type)[0].children
        this.setState({
            columns: listItem
        })


    }
    public render() {
        let { dataList, columns, list, tabType,tabTitle} = this.state
        return (
            <div>
                <h2>用户展示</h2>
                {
                    list.map((item: any, index: number) =>                      
                        <span key={index}
                            onClick={() => { this.changeTab(item.type, item.url,item.tabTitle) }}
                            className={item.type===tabType?"active tab-btn":"tab-btn"}>
                            {item.tabTitle}

                        </span>                       
                    )
                }
                <h1>{tabTitle}</h1>
                <Table columns={columns} dataSource={dataList} />
            </div>
        )
    }
}

export default ShowQuestion