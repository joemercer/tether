const React = require('react');
const TodoStore = require('../stores/TodoStore');
const ContactStore = require('../stores/ContactStore');
const ActionCreator = require('../actions/ActionCreators');
const TaskList = require('./TaskList.jsx');
const mui = require('material-ui');

let {RaisedButton} = mui;

let App = React.createClass({

  getInitialState() {
    return {
      tasks: []
    }
  },

  _onChange() {
    let self = this;

    TodoStore.getFiltered(function(task){
      return !task.completed;
    }).then(function(tasks){
      self.setState({
        tasks: tasks
      });
    }).catch(function (err) {
      console.log(err);
    });
  },

  componentDidMount() {
    let self = this;

    TodoStore.addChangeListener(this._onChange);

    TodoStore.getFiltered(function(task){
      return !task.completed;
    }).then(function(tasks){
      self.setState({
        tasks: tasks
      });
    }).catch(function (err) {
      console.log(err);
    });
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  handleAddNewClick(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.Messages.add({
        to: title
      });
    }
  },

  handleClearListClick(e) {
    ActionCreator.Contacts.createMessages();
  },

  render() {
    let {tasks} = this.state;
    return (
      <div className="example-page">
        <h1>Tether</h1>

        <TaskList tasks={tasks} />

        <RaisedButton label="Force Add Task" primary={true} onClick={this.handleAddNewClick} />
        <RaisedButton label="Create Messages" secondary={true} onClick={this.handleClearListClick} />
      </div>
    );
  }

});

module.exports = App;
