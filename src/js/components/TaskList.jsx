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
      <ul className="task-list">
        {tasks.map(task =>
          <Task key={task._id} message={task} />
        )}
      </ul>
    );
  }
});

module.exports = TaskList;
