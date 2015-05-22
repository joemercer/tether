const React = require('react');
const ActionCreator = require('../actions/ActionCreators');

let AddContactForm = React.createClass({

  getDefaultProps() {
    return {
      newContact: {
        name: null,
        email: '',
        cadence: 12 // messages per year
      }
    };
  },

  updateName(e) {
    this.props.newContact.name = e.target.value;
  },

  updateEmail(e) {
    this.props.newContact.email = e.target.value;
  },

  updateCadence(e) {
    debugger
    // this.props.newContact.email = e.target.value;
  },

  render() {
    let {newContact} = this.props;
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

        <div className="grouped fields">
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" onClick={this.updateCadence} />
              <label>Twice weekly</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="cadence" onChange={this.updateCadence} />
              <label>Weekly</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="cadence" checked={newContact.cadence === 12} onChange={this.updateCadence} />
              <label>Monthly</label>
            </div>
          </div>
        </div>

        <div className="ui submit button">Add New Contact</div>

      </form>
    );
  }

});

module.exports = AddContactForm;
