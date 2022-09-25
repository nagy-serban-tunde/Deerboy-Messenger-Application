import React, { Component } from 'react'
import SidebarLeft from './sidebar-left'
import SidebarRight from './sidebar-right'
import ChatWindow from './chat-window'


export default class Messenger extends Component {

    render() {

        return <div className="app-messenger">
                <div className="main">
                    <SidebarLeft />
                    <ChatWindow />
                    <SidebarRight />
                </div>
            </div>
  }
}