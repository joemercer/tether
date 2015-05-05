const React = require('react');
const Task = require('./Task.jsx');
const mui = require('material-ui');

let {Paper} = mui;

let TaskList = React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    let {tasks} = this.props;
    return (
      <form id="task-list">
        {tasks.map(task =>
          <Task key={task._id} task={task} />
        )}
      </form>
    );
  }
});

module.exports = TaskList;
