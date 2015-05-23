const React = require('react');
const ActionCreator = require('../actions/ActionCreators');

const AddContactForm = require('./AddContactForm.jsx');

let Settings = React.createClass({

	createMessages(e) {
    ActionCreator.Contacts.createMessages();
  },

  render() {
    return (
      <div>
      	<button className="ui button" onClick={this.createMessages}>Create More Messages</button>
      	<br />
      	<hr />
      	<br />
        <AddContactForm />
      </div>
    );
  }

});

module.exports = Settings;
