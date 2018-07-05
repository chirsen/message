import React, { Component } from "react";
import "../css/index.scss";
import { messageTypeMap, typeList } from './config'
import classNames from 'classnames';

const showTyps = typeList.map(key => messageTypeMap[key]);
export default class MessageBoxList extends Component {
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
                <MessageBoxList.Head />
                <div className="content">
                    <MessageBoxList.Nav focusType={curType} messageTyps={showTyps} changeType={this.changeTypeHandler}/>
                    <MessageBoxList.List type={2}/>
                </div>
            </div>
        );
    }
}

// 头部
MessageBoxList.Head = (props) => {
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
MessageBoxList.Nav = (props) => {
    const { focusType, showTyps, changeTypeHandler } = props;
    return (
        <ul className="navs">
            showTyps.map(({type, typeName}) => {
                <li className={classNames("nav-item", {"nav-active": focusType === type})} 
                    onClick={(e) => changeTypeHandler(type)}>
                    {typeName}
                </li>
            })
        </ul>
    );
}
// 内容的消息列表
MessageBoxList.List = (props) => {
    const openMsg = 0;
    const {type} = props;
    // 根据
}
