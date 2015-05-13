const React = require('react');
const TodoStore = require('../stores/TodoStore');
const ActionCreator = require('../actions/TodoActionCreators');
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

    TodoStore.getAll().then(function(resp) {
      self.setState({
        tasks: resp.rows.map(row => row.doc)
      });
    }).catch(function (err) {
      console.log(err);
    });
  },

  componentDidMount() {
    let self = this;

    TodoStore.addChangeListener(this._onChange);

    TodoStore.getAll().then(function(resp) {
      self.setState({
        tasks: resp.rows.map(row => row.doc)
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
      ActionCreator.addItem(title);
    }
  },

  handleClearListClick(e) {
    console.log('nothing');
    
  },

  render() {
    let {tasks} = this.state;
    return (
      <div className="example-page">
        <h1>Learning Flux</h1>
        <p>
          Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
          Most features are left unimplemented with clues to guide you on the learning process.
        </p>

        <TaskList tasks={tasks} />

        <RaisedButton label="Add Task" primary={true} onClick={this.handleAddNewClick} />
        <RaisedButton label="Clear List" secondary={true} onClick={this.handleClearListClick} />
      </div>
    );
  }

});

module.exports = App;
