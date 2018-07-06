import React, { Component } from "react";
import "../css/index.scss";
import { messageTypeMap, typeList } from './config'
import classNames from 'classnames';

const showTyps = typeList.map(key => messageTypeMap[key]);
class MessageBoxList extends Component {
    state = {
        curType: 2
    }
    // 点击侧边
    changeTypeHandler(type) {
        this.setState({
            curType: type 
        });
    }
    render() {
        return (
            <div className="message-box-list-wrap">
                <Head num={0} trigger={()=>{}}/>
                <div className="content">
                    <Nav focusType={this.state.curType} showTyps={showTyps} changeType={this.changeTypeHandler}/>
                    <List type={2}/>
                </div>
            </div>
        );
    }
}

// 头部
const Head = (props) => {
    return (
        <div className="header">
            <div className="title">
                消息盒子<span className="tips">{props.num}</span>
            </div>
            <em className="close" onClick={props.trigger}>+</em>
        </div>
    );
}

// 内容的nav
const Nav = (props) => {
    const { focusType, showTyps, changeType } = props;
    return (
        <ul className="navs">
            {Object.keys(showTyps).map((type) => 
                <li className={classNames("nav-item", {"nav-active": focusType === (1+type)})} 
                    onClick={(e) => changeType(1 + type)}>
                    {showTyps[type]}
                </li>
            )}
        </ul>
    );
}
// 内容的消息列表
const List = (props) => {
    const openMsg = 0;
    const {type} = props;
    // 根据 type 值请求后台，获取列表
    return (<div></div>);
}

export default MessageBoxList;
