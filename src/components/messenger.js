import React, { Component } from 'react'
import SidebarLeft from './sidebar-left'
import SidebarRight from './sidebar-right'
import ChatWindow from './chat-window'


export default class Messenger extends Component {

    render() {

        const { store } = this.props;
        return <div className="app-messenger">
                <div className="main">
                    <SidebarLeft store={store}/>
                    <ChatWindow store={store}/>
                    <SidebarRight store={store}/>
                </div>
            </div>
  }
}