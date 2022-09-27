import {OrderedMap} from 'immutable'
import _ from 'lodash'

import profile_people from './images/profile-people.png'
// import people2 from './images/people2.png'
import people1 from './images/people1.png'
import sasha from './images/sasha.png'
import cristina from './images/cristina.png'
import lucas from './images/lucas.png'
import aneha from './images/aneha.png'
import george from './images/george.png'
import avatar from './images/avatar.png'

const users = OrderedMap({
    '1': {_id: 1, name: 'Franky Schmidt, Annie …', avatar: people1, status_color: 'green', created: new Date()},
    '2': {_id: 2, name: 'Sasha Cohen', avatar: sasha, status_color: 'green', created: new Date()},
    '3': {_id: 3, name: 'Robert Landsberg', avatar: avatar, status_color: 'green', created: new Date()},
    '4': {_id: 4, name: 'Cristina Röhmer', avatar: cristina, status_color: 'yellow', created: new Date()},
    '5': {_id: 5, name: 'Lukas Schultz', avatar: lucas, status_color: 'yellow', created: new Date()},
    '6': {_id: 5, name: 'Bobby Beuger', avatar: avatar, status_color: 'grey', created: new Date()},
    '7': {_id: 5, name: 'Алена Сорокина', avatar: aneha, status_color: 'grey', created: new Date()},
    '8': {_id: 5, name: 'George Bukia', avatar: george, status_color: 'green', created: new Date()},
})

export default class Store {
    constructor (appComponent) {
        this.app = appComponent;
        this.messages = new OrderedMap();
        this.channels = new OrderedMap(); 
        this.activeChannelID = null;
        this.user = {
            _id: 0,
            name: 'George Tarielashvili',
            avatar: profile_people,
            profession:'Senior UI/UX Designer',
            status:'Online',
            status_color: 'green',
            created: new Date(),
        }
    }

    getActiveChannel() {
        const channel = this.activeChannelID ? this.channels.get(this.activeChannelID) : this.channels.first();

        return channel;
    }

    getMessages() {
        return this.messages.valueSeq();
    }

    getChannels() {
        return this.channels.valueSeq();
    }

    getUser() {
        return this.user;
    }

    getUsers() {
        return users;
    }

    getUsersById(id) {
        return users.get(id);
    }

    getMessagesFromChannel (channel) {
        let messages = [];
        if (channel) {
            channel.messages.map((value, key) => {
                const message = this.messages.get(key);
                messages.push(message);
                return true;
            });
        }
        return messages
    }

    getMembersFromChannel(channel){
        const members = [];

        if (channel) {
            channel.members.map((value, key) => {
                const member = users.get(key);
                members.push(member)
                return true;
            });
        }

        return members;
    }

    setActiveChannelID(id) {
        this.activeChannelID = id;
        this.update();
    }

    addMessage(index, message = {}) {
        this.messages = this.messages.set(`${index}`, message);

        const channelId = _.get(message, 'channelId');

        if (channelId) {
            const channel = this.channels.get(channelId);
            channel.messages = channel.messages.set(index, true);
            this.channels = this.channels.set(channelId, channel);
        }

        this.update();
    }

    addChannel(index, channel = {}) {
        this.channels = this.channels.set(`${index}`, channel);
        this.update();
    }

    update() {
        this.app.forceUpdate();
    }

}