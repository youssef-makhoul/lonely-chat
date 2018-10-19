import React, { Component } from "react";
import "./LonelyChat.css";

class ConversationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.makeLineElement = this.makeLineElement.bind(this);
  }
  makeLineElement(obj,index) {
    return (
      <li className="ConversationElement" key={index}>
        <span className="PersonName">{obj.name}</span>
        {": "}
        {obj.message}
      </li>
    );
  }
  render() {
    return (
      <div className="ConversationFormComp">
        <ul>{this.props.Conversation.map(this.makeLineElement)}</ul>
      </div>
    );
  }
}

class LonelyChat extends Component {
  constructor(props) {
    super(props);
    this.userName1 = "Youssef";
    this.userName2 = "Mr. Lonely";
    this.state = {
      conversation: [],
      currentUser: this.userName1,
      currentMessage: ""
    };
    this.onSubmitChat = this.onSubmitChat.bind(this);
    this.onChangeMessageText = this.onChangeMessageText.bind(this);
  }
  onSubmitChat(event) {
    event.preventDefault();
    let userName =
      this.state.currentUser === this.userName1
        ? this.userName2
        : this.userName1;
    this.setState({
      conversation: this.state.conversation.concat(
        this.createConversationObject(
          this.state.currentUser,
          this.state.currentMessage
        )
      ),
      currentUser: userName,
      currentMessage: ''
    });
  }
  onChangeMessageText(event) {
    this.setState({
      currentMessage: event.target.value
    });
  }
  createConversationObject(name, message) {
    return { name: name, message: message };
  }
  render() {
    return (
      <div>
        <ConversationForm Conversation={this.state.conversation} />
        <form onSubmit={this.onSubmitChat} className='ChatForm'>
          <input
            type="text"
            value={this.state.currentMessage}
            onChange={this.onChangeMessageText}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default LonelyChat;
