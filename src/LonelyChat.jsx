import React, { Component } from "react";
import "./LonelyChat.css";
import { sentence } from "txtgen";
let createRandomSentence = sentence;
class ConversationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.makeLineElement = this.makeLineElement.bind(this);
  }
  makeLineElement(obj, index) {
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

    this.bot1 = "Josie";
    this.bot2 = "Frederic";
    this.josieAnswers = ["1", "2", "3"];
    this.state = {
      username: "",
      conversation: [],
      currentMessage: "",
      showUserNameForm: true
    };
    this.onSubmitChat = this.onSubmitChat.bind(this);
    this.onChangeMessageText = this.onChangeMessageText.bind(this);
    this.onChangeUserNameBox = this.onChangeUserNameBox.bind(this);
    this.onSubmitUserName = this.onSubmitUserName.bind(this);
  }
  onSubmitChat(event) {
    event.preventDefault();
    let message = this.state.currentMessage;
    this.setState({
      conversation: this.state.conversation.concat([
        this.createConversationObject(this.state.username, message),
        this.createConversationObject(this.bot2, createRandomSentence())
      ]),
      currentMessage: ""
    });
    setTimeout(() => {
      this.setState({
        conversation: this.state.conversation.concat(
          this.createConversationObject(this.bot1, createRandomSentence())
        )
      });
    }, Math.floor(Math.random() * 2000));
  }
  onChangeMessageText(event) {
    this.setState({
      currentMessage: event.target.value
    });
  }
  createConversationObject(name, message) {
    return { name: name, message: message };
  }
  onChangeUserNameBox(event) {
    this.setState({ username: event.target.value });
  }
  onSubmitUserName(event) {
    event.preventDefault();
    this.setState({showUserNameForm:false});
  }
  render() {
    if (this.state.showUserNameForm) {
      return (
        <div>
          <form onSubmit={this.onSubmitUserName} className="ChatForm">
          <span>userName:</span>
            <input
              type="text"
              value={this.state.usernameBox}
              onChange={this.onChangeUserNameBox}
            />
            <input type="submit" value="SignIn"/>
          </form>
        </div>
      );
    }
    return (
      <div>
        <ConversationForm Conversation={this.state.conversation} />
        <form onSubmit={this.onSubmitChat} className="ChatForm">
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
