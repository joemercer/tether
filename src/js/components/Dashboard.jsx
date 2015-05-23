const React = require('react');

const MessageStore = require('../stores/MessageStore');
const ContactStore = require('../stores/ContactStore');
const ActionCreator = require('../actions/ActionCreators');

const Messages = require('./Messages.jsx');


let Dashboard = React.createClass({

  getInitialState() {
    return {
      tasks: []
    }
  },

  _onChange() {
    let self = this;

    MessageStore.getFiltered(function(task){
      return !task.sent;
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
      return !task.sent;
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

  render() {
    let {tasks} = this.state;
    return (
      <div>
        <Messages messages={tasks} />
      </div>
    );
  }

});

module.exports = Dashboard;
