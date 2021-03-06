import React from 'react';
import Message from '../Message';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: '',
      count: 0
    };

    this.changeInputMessage = this.changeInputMessage.bind(this);
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
  }


  changeInputMessage(e) {
    this.setState({ messageInput: e.target.value });
  }


  sendMessageOnEnter(e) {
    if (e.key === 'Enter') {
      this.setState({
        messages: [
            ...this.state.messages,
            {
              text: this.state.messageInput
            }
          ],
          count: this.state.count + 1,
          messageInput: ''
        });
      }
    }
  
    render() {
      return (
        <div className="chat">
          <ul>
            {this.state.messages.map((item, index) => {
                 return (
                    <Message
                    key={index}
                    text={item.text}
                    />
                );
              })}
            </ul>
            <input
              className="input-message"
              value={this.state.messageInput}
              onChange={this.changeInputMessage}
              onKeyPress={this.sendMessageOnEnter}
            />
          </div>
        );
      }
    }
    
    
    export default Chat;