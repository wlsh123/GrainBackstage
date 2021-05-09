import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Modal } from 'antd';
import { createFromIconfontCN, ExclamationCircleOutlined } from '@ant-design/icons';
// import { ExclamationCircleOutlined } from '@ant-design/icons';
import { formateDate } from '../../utils/dateUtils';
import memoryUtils from '../../utils/memoryUtils';
import { reqWeather } from '../../api/index';
import menuList from '../../config/menuConfig'; 
import storageUtils from '../../utils/storageUtils';
import LinkButton from '../../components/link-button';
import './style.less'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime:formateDate(Date.now()),//当前时间字符串
            weather:''
        }
    }
    getTime = () =>{
        this.intervalId = setInterval(() => {
            const currentTime = formateDate(Date.now());
            this.setState({currentTime})
        }, 1000);
    }
    getWeather = async () =>{
        const result = await reqWeather('北京');
        // console.log(result[0]);
        this.setState({ weather:result[0].weather})
    }
    getTitle = ()=>{
        const path = this.props.location.pathname;
        let title;
        menuList.forEach(item=>{
            if (item.key === path) {
                title = item.title;
            }else if (item.children){//在子item中查找匹配的
               const cItem =  item.children.find(cItem => cItem.key === path);
               if (cItem) {
                   title = cItem.title;
               }
            }
        })
        return title;
    }
    logout = ()=>{//退出登录
        const { confirm } = Modal;
        confirm({
            // title: '确定要退出吗?',
            icon: <ExclamationCircleOutlined />,
            content: '确定退出吗？',
            onOk:()=> {
                //删除保存的user
                storageUtils.removeUser()
                memoryUtils.user = {}
                //跳转到login
                this.props.history.replace('/login');
            },
            
        });
    }
    // 第一次render（）之后执行一次，一般在此执行异步操作：ajax请求/定时器
    componentDidMount(){
        this.getTime()
        this.getWeather()
    }
    // 当前组件卸载之前调用
    componentWillUnmount (){
        clearInterval(this.intervalId)
    }
    render() {
        const MyIcon = createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_2536438_bs16w947tga.js"})
        const {currentTime, weather} = this.state;
        const username = memoryUtils.user.data.username;
        const title = this.getTitle();
        // console.log(memoryUtils.user);
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{username}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <MyIcon className="icon" type="icon-qing"/>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);