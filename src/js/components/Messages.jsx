const React = require('react');
const Task = require('./Message.jsx');

let Messages = React.createClass({
  getDefaultProps() {
    return {
      messages: []
    };
  },

  render() {
    let {messages} = this.props;
    return (
      <ul className="task-list">
        {messages.map(message =>
          <Task key={message._id} message={message} />
        )}
      </ul>
    );
  }
});

module.exports = Messages;
