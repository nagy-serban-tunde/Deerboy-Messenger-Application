import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

// Images
import people1 from '../images/people1.png'
import people3 from '../images/people3.png'

// svg 
import smile from '../images/smile.svg'
import send_button from '../images/send-button.svg'


export default class ChatWindow extends Component {
    constructor(props) {
        super(props);

        this._onResize = this._onResize.bind(this);
        this.addTestMessage = this.addTestMessage.bind(this);
    }

    _onResize() {
    }

    componentDidMount() {
        window.addEventListener('resize', this._onResize);
        this.addTestMessage();
    }

    addTestMessage() {

        const {store} = this.props;

        for (let i = 0; i < 100; i++) {
            let isMe = false;
            let chat_avatar = people1;
            if (i % 2 === 0) {
                isMe = true;
                chat_avatar = people3;
            }
            const newMsg = { 
                _id: `${i}`,
                author: `Author ${i}`,
                body: `The body of message ${i}`,
                avatar: chat_avatar,
                me: isMe,
                time: `19:${i}`,
            }
            store.addMessage(i, newMsg);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize);
    }
    render() {
        const {store} = this.props;
        const activeChannel = store.getActiveChannel();
        const messages = store.getMessagesFromChannel(activeChannel);

        return <div className="content">
                    <div className="messages-title">
                        <h2 className="title">Family chat</h2>
                    </div>
                    <div className="messages">
                        {messages.map((message, index) => {
                            return (
                                <div key={index} className={classNames('message', {'me': message.me})}>
                                    <div className="message-user-image">
                                        <img src={message.avatar} alt="avatar" />
                                    </div>
                                    <div className="message-body">
                                        <div className="message-text">
                                            <p>{message.body}</p>
                                        </div>
                                        <span className="time">{message.time}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="messenger-input">
                        <div className="text-input">
                            <input type="text" name="Search" placeholder="Enter your message here"/>
                            <div className="actions">
                                <button className="smile"><img src={smile} alt="React Logo" /></button>
                                <button className="send"><img src={send_button} alt="React Logo" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                    
    }

}