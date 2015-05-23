const React = require('react');
const ActionCreator = require('../actions/ActionCreators');

const MessageStore = require('../stores/MessageStore');
const ContactStore = require('../stores/ContactStore');

const Router = require('react-router'); 
const RouteHandler = Router.RouteHandler;

const Header = require('./Header.jsx');

let App = React.createClass({

  createMessages(e) {
    ActionCreator.Contacts.createMessages();
  },

  render() {
    return (
      <div className="content">
        <Header />

        <br />

        <RouteHandler />
      </div>
    );
  }

});

module.exports = App;
