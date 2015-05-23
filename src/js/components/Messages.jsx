const React = require('react');
const Task = require('./Message.jsx');

const MessageStore = require('../stores/MessageStore');

const GetMessages = function(){
  return MessageStore.getFiltered(function(message){
    return !message.sent;
  });
};

let Messages = React.createClass({

  getInitialState() {
    return {
      messages: []
    }
  },

  _onChange() {
    let self = this;

    GetMessages().then(function(messages){
      self.setState({
        messages: messages
      });
    }).catch(function (err) {
      console.log('!!! Error:' + err);
    });
  },

  componentDidMount() {
    MessageStore.addChangeListener(this._onChange);
    this._onChange();
  },

  componentWillUnmount() {
    MessageStore.removeChangeListener(this._onChange);
  },

  render() {
    let {messages} = this.state;
    return (
      <ul className="message-list">
        {messages.map(message =>
          <Task key={message._id} message={message} />
        )}
      </ul>
    );
  }
});

module.exports = Messages;
