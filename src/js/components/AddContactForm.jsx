const React = require('react');
const ActionCreator = require('../actions/ActionCreators');

let AddContactForm = React.createClass({

  getDefaultProps() {
    return {
      contact: {
        name: null,
        email: '',
        cadence: 12 // messages per year
      }
    };
  },

  updateName(e) {
    debugger;
  },

  render() {
    return (
      <form className="ui form">
        <h4 className="ui dividing header">New Contact</h4>
        <div className="two fields">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" onChange={this.updateName} />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
        </div>
        <h4 className="ui dividing header">Cadence</h4>
        <div className="grouped fields">
          <label htmlFor="alone">How frequently would you like to contact this person?</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="cadence" />
              <label>Twice weekly</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="cadence" />
              <label>Weekly</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" defaultChecked="true" name="cadence" />
              <label>Monthly</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="cadence" />
              <label>Quarterly</label>
            </div>
          </div>
        </div>

        <div className="ui submit button">Add New Contact</div>
      </form>
    );
  }

});

module.exports = AddContactForm;
