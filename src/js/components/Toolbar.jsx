const React = require('react');
const ActionCreator = require('../actions/ActionCreators');

window.$ = window.jQuery = require('jquery');
const Semantic = require('../../semantic/dist/semantic.min.js');

let Button = require('react-semantify').Button;



let Toolbar = React.createClass({

  triggerAddNewContact(e) {
    $('.ui.modal').modal('show');
  },

  render() {
    return (
      <div class="ui menu">
        <a class="active item">
          <i class="home icon"></i> Home
        </a>
        <a class="item">
          <i class="mail icon"></i> Messages
        </a>
        <Button color="red" onClick={this.triggerAddNewContact}>Hello</Button>
        <Button color="blue" onClick={this.triggerAddNewContact}>Add Contact</Button>
        <Button color="blue">Login</Button>
        <div class="right menu">
          <div class="item">
            <div class="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div>
        </div>

        <div className="ui modal">
          <i className="close icon"></i>
          <div className="header">
            Modal Title
          </div>
          <div className="content">
            <div className="image">
              An image can appear on left or an icon
            </div>
            <div className="description">
              A description can appear on the right
            </div>
          </div>
          <div className="actions">
            <div className="ui button">Cancel</div>
            <div className="ui button">OK</div>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Toolbar;
