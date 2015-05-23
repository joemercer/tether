const React = require('react');
const ActionCreator = require('../actions/ActionCreators');

const ContentEditable = require('./ContentEditable.jsx');

const debounce = require('lodash.debounce');


// function for updating a task
// created here so we can debounce it later
const UpdateTaskInstantly = function(task){
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

  handleChange(e){
    let task = this.props.task;
    task.message = e.target.value;
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
        <ContentEditable html={task.message} onChange={this.handleChange} />
        <p>Saved: {task.message}</p>
        <button className="ui button" onClick={this.handleClick.bind(this, task)}>Send</button>
      </li>
    );
  }
});

module.exports = Task;
