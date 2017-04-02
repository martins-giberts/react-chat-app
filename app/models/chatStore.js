import {observable, computed} from 'mobx'

class ChatStore {
  @observable messages = ['test message 1', 'test message 2']

  @computed get messagesCount() {
    return this.messages.length
  }

  addMessage(text) {
    this.messages.push(text)
  }
}

const chatStore = new ChatStore()

export default chatStore
