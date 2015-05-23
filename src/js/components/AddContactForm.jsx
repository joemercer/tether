const React = require('react');
const ActionCreator = require('../actions/ActionCreators');

let AddContactForm = React.createClass({

  getInitialState() {
    return {
      newContact: {
        name: 'Mom',
        email: 'mom@gmail.com',
        cadence: 12 // messages per year
      }
    };
  },

  getNullState() {
    return {
      newContact: {
        name: null,
        email: null,
        cadence: null // messages per year
      }
    };
  },

  updateName(e) {
    this.state.newContact.name = e.target.value;
    this.setState(this.state);
  },

  updateEmail(e) {
    this.state.newContact.email = e.target.value;
    this.setState(this.state);
  },

  updateCadence(e) {
    let cadence = parseInt(e.target.value);
    cadence = (cadence > 0) ? cadence : 0;
    this.state.newContact.cadence = cadence;
    this.setState(this.state);
  },

  submitNewContact(e) {
    ActionCreator.Contacts.add(this.state.newContact);
    this.setState(this.getNullState());
  },

  render() {
    let {newContact} = this.state;
    return (
      <form className="ui form">

        <h4 className="ui dividing header">New Contact</h4>

        <div className="two fields">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={newContact.name} onChange={this.updateName} />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={newContact.email} onChange={this.updateEmail} />
          </div>
        </div>

        <h4 className="ui dividing header">How frequently would you like to contact this person?</h4>

        <div className="field">
          <label>Cadence (in messages per year)</label>
          <input type="text" name="cadence" placeholder="Cadence" value={newContact.cadence} onChange={this.updateCadence} />
        </div>

        <button className="ui submit button" onClick={this.submitNewContact}>Add New Contact</button>

      </form>
    );
  }

});

module.exports = AddContactForm;
