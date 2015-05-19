const React = require('react');
const ActionCreator = require('../actions/ActionCreators');
const mui = require('material-ui');
const Message = require('./Message.jsx');
const debounce = require('lodash.debounce');

let {FlatButton} = mui;

var UpdateTaskInstantly = function(task){
  ActionCreator.Messages.update(task);
};

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

  _updateTaskInstantly: UpdateTaskInstantly,
  _updateTask: debounce(UpdateTaskInstantly, 1000),

  handleChange(evt){
    let task = this.props.task;
    task.message = evt.target.value;
    this._updateTask(task);
  },

  handleClick(task) {
    task.completed = true;
    this._updateTaskInstantly(task);
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
