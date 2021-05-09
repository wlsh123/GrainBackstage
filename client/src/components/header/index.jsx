import React, { Component } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { formateDate } from '../../utils/dateUtils';
import memoryUtils from '../../utils/memoryUtils';
import { reqWeather } from '../../api/index';
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
        setInterval(() => {
            const currentTime = formateDate(Date.now());
            this.setState({currentTime})
        }, 1000);
    }
    getWeather = async () =>{
        const result = await reqWeather('北京');
        console.log(result);
        this.setState({ weather: result.weather })
    }
    // 第一次render（）之后执行一次，一般在此执行异步操作：ajax请求/定时器
    componentDidMount(){
        this.getTime()
        this.getWeather()
    }
    render() {
        const MyIcon = createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_2536438_bs16w947tga.js"})
        const {currentTime, weather} = this.state;
        const username = memoryUtils.user.data.username;
        // console.log(memoryUtils.user);
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{username}</span>
                    <a href="">退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">首页</div>
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

export default Header;