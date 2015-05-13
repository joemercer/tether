const React = require('react');
const ActionCreator = require('../actions/TodoActionCreators');
const mui = require('material-ui');

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

  handleClick(task) {
    ActionCreator.completeTask(task);
  },

  render() {
    let {task} = this.props;
    return (
      <li className="task-item">
        <h4>{task.to}</h4>
        <p>{task.message}</p>
        <FlatButton label="Button" primary={true} onClick={this.handleClick.bind(this, task)} />
      </li>
    );
  }
});

module.exports = Task;
