import React, { Component } from "react";
import { render } from "react-dom";
import MessageBoxInfo from './MessageBoxInfo';
import MessageBoxList from './MessageBoxList';
import "../css/index.scss";

export default class MessageBox extends Component {
    state = {
        showList: false
    }
    // 打开盒子里的消息列表
    showList = (e) => {
        this.setState({
            showList: true
        });
        e && e.preventDefault();
    }
    // 关闭盒子的消息列表
    closeList = (e) => {
        this.setState({
            showList: false
        });
        e && e.preventDefault();
    }

    render() {
        return (
            <div className="message-box-wrap" >
                <img src="../assets/message.png" alt="" className="icon" onClick={this.showList}/>
                <div className="tips">{this.state.infoNum}</div>
                <MessageBoxInfo />
                {this.state.showList && <MessageBoxList />}
            </div>
        );
    }
}

render(<MessageBox />, document.querySelector("#demo"));
