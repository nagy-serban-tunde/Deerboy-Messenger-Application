import {OrderedMap} from 'immutable'

const users = OrderedMap({
    '1': {_id: 1, name: 'John1', created: new Date()},
    '2': {_id: 2, name: 'John2', created: new Date()},
    '3': {_id: 3, name: 'John3', created: new Date()},
    '4': {_id: 4, name: 'John4', created: new Date()},
    '5': {_id: 5, name: 'John5', created: new Date()},
})

export default class Store {
    constructor (appComponent) {
        this.app = appComponent;
        this.messages = new OrderedMap();
        this.channels = new OrderedMap(); 
        this.activeChannelID = null;
        this.user = {
            _id: 0,
            name: 'Tunde',
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

    getMessagesFromChannel (channel) {
        let messages = [];
        if (channel) {
            channel.messages.map((value, key) => {
                const message = this.messages.get(key);
                messages.push(message);
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