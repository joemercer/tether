const React = require('react');
const ActionCreator = require('../actions/ActionCreators');

const ContentEditable = require('./ContentEditable.jsx');

const debounce = require('lodash.debounce');


// function for updating a task
// created here so we can debounce it later
const UpdateMessageInstantly = function(message){
  ActionCreator.Messages.update(message);
};

let Message = React.createClass({

  getDefaultProps() {
    return {
      message: {
        _id: 0,
        to: '',
        content: '',
        sent: false
      }
    };
  },

  _updateMessageInstantly: UpdateMessageInstantly,
  _updateMessage: debounce(UpdateMessageInstantly, 1000),

  updateContent(e){
    let message = this.props.message;
    message.content = e.target.value;
    this._updateMessage(message);
  },

  updateSent(message) {
    message.sent = true;
    this._updateMessageInstantly(message);
  },

  updateScore(message) {
    message.score = message.score - 1;
    this._updateMessageInstantly(message);
  },

  render() {
    let {message} = this.props;
    return (
      <li className="message-item">
        <h4>{message.to}</h4>
        <ContentEditable html={message.content} onChange={this.updateContent} />
        <p>Saved: {message.content}</p>
        <div className="message-toolbar">
          <button className="ui button" onClick={this.updateScore.bind(this, message)}>Snooze</button>
          <button className="ui button" onClick={this.updateSent.bind(this, message)}>Send</button>
        </div>
      </li>
    );
  }

});

module.exports = Message;
