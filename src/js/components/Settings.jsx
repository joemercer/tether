const React = require('react');

const AddContactForm = require('./AddContactForm.jsx');

let Settings = React.createClass({

  render() {
    return (
      <div>
        <AddContactForm />
      </div>
    );
  }

});

module.exports = Settings;
