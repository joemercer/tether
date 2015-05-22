const React = require('react');
const Task = require('./Task.jsx');

let TaskList = React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    let {tasks} = this.props;
    return (
      <ul id="task-list">
        {tasks.map(task =>
          <Task key={task._id} task={task} />
        )}
      </ul>
    );
  }
});

module.exports = TaskList;
