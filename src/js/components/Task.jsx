const React = require('react');
const ActionCreator = require('../actions/TodoActionCreators');
const mui = require('material-ui');
const Message = require('./Message.jsx');

let {FlatButton} = mui;

let Task = React.createClass({
  getDefaultProps() {
    return {
      task: {
        _id: 0,
        to: '',
        message: '',
        completed: false
      }
    };
  },

  handleChange(evt){
    let task = this.props.task;
    task.message = evt.target.value;
    ActionCreator.updateTask(task);
  },

  handleClick(task) {
    ActionCreator.completeTask(task);
  },

  render() {
    let {task} = this.props;
    return (
      <li className="task-item">
        <h4>{task.to}</h4>
        <Message html={task.message} onChange={this.handleChange} />
        <p>{task.message}</p>
        <FlatButton label="Button" primary={true} onClick={this.handleClick.bind(this, task)} />
      </li>
    );
  }
});

module.exports = Task;
