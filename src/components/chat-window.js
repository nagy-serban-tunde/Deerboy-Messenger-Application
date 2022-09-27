import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

// Images
import people1 from '../images/people1.png'

// svg 
import smile from '../images/smile.svg'
import send_button from '../images/send-button.svg'


export default class ChatWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newMessage : ''
        }

        this._onResize = this._onResize.bind(this);
        this.addTestMessage = this.addTestMessage.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    _onResize() {
    }

    handleSend() {
        const {newMessage} = this.state;
        const {store} = this.props;
        const user = store.getUser();
        // const messageId = '10000';
        const channel = store.getActiveChannel();
        const channelId = _.get(channel, '_id', null);
        var messageId = '';
        var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i <6; i++ ) {
            messageId += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
        }
        const message = {
            _id: messageId,
            channelId: channelId,
            body: newMessage,
            author: user.name,
            avatar: user.avatar,
            me: true,
            time: '19:08',
        }
        
        store.addMessage(messageId, message)
    }

    componentDidMount() {
        window.addEventListener('resize', this._onResize);
        this.addTestMessage();
    }

    addTestMessage() {

        const {store} = this.props;
        const user = store.getUser();

        for (let i = 0; i < 100; i++) {
            let isMe = false;
            let chat_avatar = people1;
            if (i % 2 === 0) {
                isMe = true;
                chat_avatar = user.avatar;
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
                            <input type="text" name="Search" onKeyUp={(event)=> {
                                if(event.key === 'Enter' && !event.shiftKey) {
                                    this.handleSend();
                                }
                            }} onChange={(event) => {
                                this.setState({newMessage: _.get(event,'target.value')})
                            }} placeholder="Enter your message here" value={this.state.newMessage}/>
                            <div className="actions">
                                <button className="smile"><img src={smile} alt="React Logo" /></button>
                                <button className="send" onClick={this.handleSend}><img src={send_button} alt="React Logo" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                    
    }

}