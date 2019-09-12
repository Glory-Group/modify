import * as React from "react";
import { Layout, Select, Menu, Dropdown, Modal, Upload, Icon, message } from 'antd';
import { inject, observer } from 'mobx-react'
import "./scss/header.css"
const { Option } = Select;
const { Header } = Layout;
interface propsInfo {
    global?: any,
    user?: any
}
function getBase64(img: any, callback: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
@inject("global", "user")
@observer

export class Head extends React.Component<propsInfo> {

    constructor(props: any) {
        super(props)
    }
    state = {
        visible: false,
        loading: false,
        imageUrl:"",
        langList: [
            {
                locale: "zh",
                title: "中文"
            },
            {
                locale: "en",
                title: "英文"
            }
        ],
        menu: (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        个人中心
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        我的班级
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        设置
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        退出登录
                </a>
                </Menu.Item>
            </Menu>
        )
    }
    ChangeLangusge = (value: any) => {
        this.props.global.changeLocale(value)
    }
    showModal = () => {
        this.setState({
            visible: true,

        })
    }
    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        })
    }
    handleChange = (info:any) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl: any) =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    public render() {
        const { locale } = this.props.global
        const { langList, menu, imageUrl } = this.state
        const { userName } = this.props.user
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <Header className="header" >
                <div className="header-img" style={{ width: "120px", height: "31px", margin: "15px 50px", textAlign: 'center', lineHeight: "31px" }} >
                    <img style={{ width: "120px", height: "28px" }} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
                </div>
                <div className="lang-select">
                    选择语言：
                <Select defaultValue="中文" onChange={this.ChangeLangusge}>
                        {langList.map((item: any, index: number) => <Option value={item.locale} key={index}>{item.title}</Option>)}

                    </Select>
                </div>
                <div className="person-info">
                    <img src={imageUrl&&imageUrl} alt="avatar" className="avatar" onClick={this.showModal}/> 
                    
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <span>{userName}</span>
                    </Dropdown>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        
                        <div>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="上传头像"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                        </div>
                        
                    </Modal>
                </div>

            </Header>
        )
    }
}

export default Head


