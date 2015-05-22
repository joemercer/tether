const React = require('react');
const ActionCreator = require('../actions/ActionCreators');

// const AddContactForm = require('./AddContactForm.jsx');

window.$ = window.jQuery = require('jquery');
const Semantic = require('../../semantic/dist/semantic.min.js');



// let Button = require('react-semantify').Button;



let Toolbar = React.createClass({

  triggerAddNewContact(e) {
    $('.ui.modal').modal('show');
  },

  updateName(e) {
    debugger;
  },

  render() {
    return (
      <div className="ui menu">

        <div className="left menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>

        <div className="right menu">
          <div className="item">
            <div className="ui button" onClick={this.triggerAddNewContact}>Open Modal</div>
          </div>
          <div className="item">
            <div className="ui primary button">Sign up</div>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Toolbar;
