const React = require('react');
const MessageStore = require('../stores/MessageStore');
const ContactStore = require('../stores/ContactStore');
const ActionCreator = require('../actions/ActionCreators');
const Toolbar = require('./Toolbar.jsx');
const TaskList = require('./TaskList.jsx');
const mui = require('material-ui');

let {RaisedButton} = mui;

const AddContactForm = require('./AddContactForm.jsx');

let App = React.createClass({

  getInitialState() {
    return {
      tasks: []
    }
  },

  _onChange() {
    let self = this;

    MessageStore.getFiltered(function(task){
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

    MessageStore.addChangeListener(this._onChange);

    MessageStore.getFiltered(function(task){
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
    MessageStore.removeChangeListener(this._onChange);
  },

  handleAddNewClick(e) {
    console.log('do nothing');
    // let title = prompt('Enter task title:');
    // if (title) {
    //   ActionCreator.Messages.add({
    //     to: title
    //   });
    // }
  },

  handleClearListClick(e) {
    ActionCreator.Contacts.createMessages();
  },

  render() {
    let {tasks} = this.state;
    return (
      <div className="example-page">
        <Toolbar />
        <AddContactForm />
        <h1>Tether</h1>

        <TaskList tasks={tasks} />

        <RaisedButton label="Force Add Task" primary={true} onClick={this.handleAddNewClick} />
        <RaisedButton label="Create Messages" secondary={true} onClick={this.handleClearListClick} />
      </div>
    );
  }

});

module.exports = App;
