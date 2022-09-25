import React, { Component } from 'react'

import logo from '../images/logo.png'
import profile_people from '../images/profile-people.png'
import avatar from '../images/avatar.png'


import setting_button from '../images/button_settings.svg'
import arrow from '../images/arrow.svg'
import add_button from '../images/add.svg'

export default class SidebarLeft extends Component {

    render() {
        return <div className="sidebar-left">
                <div className="logo">
                    <img src={logo} alt="Open Messenger Logo" width="226" height="54"/>
                </div>
                <div className="user-bar">
                    <div className="profile-image">
                        <img src={profile_people} alt="Profile" width="74" height="74" />
                        <span className = "status green"></span>
                    </div>
                    <div className="profile-data">
                        <div className="name-settings">
                            <h2 className="name">George Tarielashvili</h2>
                            <span className="settings"><img src={setting_button} alt="Settings"/></span>
                        </div>
                        
                        <p className="profession">Senior UI/UX Designer</p>
                        <p className="status green">
                            <span>Online</span>
                            <img src={arrow} alt="Arrow"/>
                        </p>
                    </div>
                </div>
                <div className = "chanels">
                    <div className = "chanels-title-addchanel">
                        <h2 className="chanels-title">Active Chats</h2>
                        <span className="addchanel"><img src={add_button} alt="Add"/></span>
                    </div>
                    <div className="search">
                        <input type="text" name="Search" placeholder="Search people"/>
                    </div>
                    <div className = "chanel new-message">
                        <div className = "user-image">
                            <img src={avatar} alt="Avatar"/>
                            <span className = "status green"></span>
                        </div>
                        <div className = "chanel-info">
                            <h2>Franky Schmidt, Annie …</h2>
                            <p className="text">Me: What does this dummy…</p>
                        </div>
                        <div className = "number-message">
                            <span className="number">3</span>
                        </div>
                    </div>
                    <div className = "chanel">
                        <div className = "user-image">
                            <img src={avatar} alt="Avatar"/>
                            <span className = "status green"></span>
                        </div>
                        <div className = "chanel-info">
                            <h2>Sasha Cohen</h2>
                            <p className="typing">Typing...</p>
                        </div>
                        <div className="time">
                            <span>08:05</span>
                        </div>
                    </div>
                </div>
            </div>
                    
    }

}