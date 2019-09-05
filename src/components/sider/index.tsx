import { Layout, Menu, Breadcrumb, Icon } from "antd";
import * as React from "react"
const { Sider } = Layout
const { SubMenu } = Menu;
class Siders extends React.Component {
    state = {
        navList: [
            {
                "title": "试题管理",
                "children": [
                    {
                        "title": "添加试题",
                        "id": 1,
                    },
                    {
                        "title": "试题分类",
                        "id": 2,
                    },
                    {
                        "title": "查看试题",
                        "id": 3,
                    }
                ]
            },
            {
                "title": "用户管理",
                "children": [
                    {
                        "title": "添加用户",
                        "id": 4,
                    },
                    {
                        "title": "用户展示",
                        "id": 5,
                    }
                ]
            },
            {
                "title": "考试管理",
                "children": [
                    {
                        "title": "添加考试",
                        "id": 6,
                    },
                    {
                        "title": "试卷列表",
                        "id": 7,
                    }
                ]
            }, {
                "title": "班级管理",
                "children": [
                    {
                        "title": "班级管理",
                        "id": 8,
                    },
                    {
                        "title": "教室管理",
                        "id": 9,
                    },
                    {
                        "title": "学生管理",
                        "id": 10,
                    }
                ]
            }, {
                "title": "阅卷管理",
                "children": [
                    {
                        "title": "待批班级",
                        "id": 11,
                    }

                ]
            }
        ]
    }
    render() {
        let { navList } = this.state
        console.log(navList,"lllllllllll")
        //let {getId}=this.props
        console.log(this.props)
        return <Layout>
            <Sider>
                侧边栏
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {navList.map((item: any, index: number) => 
                        <SubMenu
                            key={item.title}
                            title={
                                <span>
                                    <Icon type={item.title} />
                                    <span>{item.title}</span>
                                </span>
                            }
                        >
                            {item.children && item.children.map((sub: any) => 
                                <Menu.Item key={sub.id} >{sub.title}</Menu.Item>
                            )}
                        </SubMenu>
                    )}

                </Menu>
            </Sider>
        </Layout>

    }
}
export default Siders;