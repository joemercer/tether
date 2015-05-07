const React = require('react');
const ActionCreator = require('../actions/TodoActionCreators');
const mui = require('material-ui');

let {Checkbox} = mui;

let Task = React.createClass({
  getDefaultProps() {
    return {
      task: {
        _id: 0,
        title: '',
        completed: false
      }
    };
  },

  handleToggle(task) {
    if (this.refs.checkbox.getDOMNode().checked) {
      debugger;
      ActionCreator.completeTask(task);
    }
  },

  handleClick(task) {
    debugger;
  },

  render() {
    let {task} = this.props;
    return (
      <li>
        <p onClick={this.handleClick.bind(this, task)}>
          Click to toggle.
        </p>
        <Checkbox name="checkboxName" ref="checkbox" checked={task.completed}
          onClick={this.handleToggle.bind(this, task)} value="on" />
        <span className="checkbox-label">{task.to}</span>
      </li>
    );
  }
});

module.exports = Task;
