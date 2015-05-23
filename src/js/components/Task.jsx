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
        completed: false
      }
    };
  },

  _updateMessageInstantly: UpdateMessageInstantly,
  _updateMessage: debounce(UpdateMessageInstantly, 1000),

  handleChange(e){
    let message = this.props.message;
    message.content = e.target.value;
    this._updateMessage(message);
  },

  handleClick(message) {
    message.completed = true;
    this._updateMessageInstantly(message);
  },

  render() {
    let {message} = this.props;
    return (
      <li className="task-item">
        <h4>{message.to}</h4>
        <ContentEditable html={message.content} onChange={this.handleChange} />
        <p>Saved: {message.content}</p>
        <button className="ui button" onClick={this.handleClick.bind(this, message)}>Send</button>
      </li>
    );
  }

});

module.exports = Message;
