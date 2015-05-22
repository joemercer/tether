const React = require('react');
const MessageStore = require('../stores/MessageStore');
const ContactStore = require('../stores/ContactStore');
const ActionCreator = require('../actions/ActionCreators');
const Toolbar = require('./Toolbar.jsx');
const TaskList = require('./TaskList.jsx');
const mui = require('material-ui');

let {RaisedButton} = mui;

const AddContactForm = require('./AddContactForm.jsx');

var Router = require('react-router'); 
var RouteHandler = Router.RouteHandler;


let App = React.createClass({

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
    return (
      <div className="example-page">
        <Toolbar />
        <AddContactForm />
        <h1>Tether</h1>

        <RouteHandler />

        <RaisedButton label="Force Add Task" primary={true} onClick={this.handleAddNewClick} />
        <RaisedButton label="Create Messages" secondary={true} onClick={this.handleClearListClick} />
      </div>
    );
  }

});

module.exports = App;
