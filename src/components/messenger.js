import React, { Component } from 'react'
import classNames from 'classnames'

// Images
import avatar from '../images/avatar.png'
import logo from '../images/logo.png'
import chanel_image from '../images/chanel-image.png'
import people1 from '../images/people1.png'
import people2 from '../images/people2.png'
import people3 from '../images/people3.png'

export default class Messenger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight,
            messages: [

            ],
        }

        this._onResize = this._onResize.bind(this);
        this.addTestMessage = this.addTestMessage.bind(this);
    }

    _onResize() {
        this.setState ({ 
            height: window.innerHeight
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this._onResize);
        this.addTestMessage();
    }

    addTestMessage() {
        let {messages} = this.state;

        for (let i = 0; i < 100; i++) {
            let isMe = false;
            if (i % 2 === 0) {
                isMe = true;
            }
            const newMsg = { 
                author: `Author ${i}`,
                body: `The body of message ${i}`,
                avatar: avatar,
                me: isMe,
            }
            messages.push(newMsg);
        }
        this.setState({messages: messages});
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize);
    }

    render() {
        const {height, messages} = this.state
        const style = {
            height: height,
        }
        return <div style={style} className="app-messenger">
                <div className="main">
                    <div className="sidebar-left">
                        <div className="logo">
                            <img src={logo} alt="Open Messenger Logo" width="226" height="54"/>
                        </div>
                        <div className="user-bar">
                            <div className="profile-image"><img src={avatar} alt="Avatar"/></div>
                            <div className="profile-data">
                                <h3 className="name">George Tarielashvili</h3>
                                <p className="profession">Senior UI/UX Designer</p>
                                <p className="status">Online</p>
                            </div>
                        </div>
                        <div className = "chanels">
                            <div className = "chanel">
                                <div className = "user-image">
                                    <img src={avatar} alt="Avatar"/>
                                </div>
                                <div className = "chanel-info">
                                    <h2>Toan, Alexander</h2>
                                    <p>Hello there...</p>
                                </div>
                            </div>
                            <div className = "chanel">
                                <div className = "user-image">
                                    <img src={avatar} alt="Avatar"/>
                                </div>
                                <div className = "chanel-info">
                                    <h2>Toan, Alexander</h2>
                                    <p>Hello there...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h2 className="messages-title">Family chat</h2>
                        <div className="messages">
                            {messages.map((message, index) => {
                                return (
                                    <div key={index} className={classNames('message', {'me': message.me})}>
                                        <div className="message-user-image">
                                            <img src={message.avatar} alt="avatar" />
                                        </div>
                                        <div className="message-body">
                                            <div className="message-author">{message.me ? 'You' : message.author} says:</div>
                                            <div className="message-text">
                                                <p>{message.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="messenger-input">
                            <div className="text-input">
                                <textarea placeholder="Write your message..."></textarea>
                            </div>
                            <div className="actions">
                                <button className="send">Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-right">
                        <div className = "chanel-image">
                            <img src={chanel_image} alt="Chanel avatar"  width="50" height="50" />
                        </div>
                        <h2 className="title">People</h2>
                        <div className="members">
                            <div className="member">
                                <div className = "user-image">
                                    <img src={people1} alt="People 1" width="44" height="44"/>
                                    <span className = "status green"></span>
                                </div>
                            </div>
                            <div className="member">
                                <div className = "user-image">
                                    <img src={people2} alt="People 2" width="44" height="44"/>
                                    <span className = "status yellow"></span>
                                </div>
                            </div>
                            <div className="member">
                                <div className = "user-image">
                                    <img src={people3} alt="People 3" width="44" height="44"/>
                                    <span className = "status green"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  }
}