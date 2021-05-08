import React, { Component } from 'react';
import './style.less'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">头部</div>
        );
    }
}

export default Header;