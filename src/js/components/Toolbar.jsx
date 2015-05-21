const React = require('react');
const ActionCreator = require('../actions/ActionCreators');
const mui = require('material-ui');

let {Toolbar, ToolbarGroup, DropDownMenu, FontIcon, DropDownIcon, RaisedButton} = mui;

window.$ = window.jQuery = require('jquery');
const Semantic = require('../../../node_modules/semantic/dist/semantic.min.js');

let Button = require('react-semantify').Button;



let TetherToolbar = React.createClass({

  triggerAddNewContact(e) {
    $('.ui.modal').modal('show');
  },

  render() {
    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <span>Search Bar</span>
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <Button color="red" onClick={this.triggerAddNewContact}>Hello</Button>
          <RaisedButton label="Add Contact" secondary={true} onClick={this.triggerAddNewContact} />
          <span className="mui-toolbar-separator">&nbsp;</span>
          <RaisedButton label="Login" primary={true} />
        </ToolbarGroup>
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
      </Toolbar>

      // <div className="example-page">
      //   <h1>Tether</h1>

      //   <TaskList tasks={tasks} />

      //   <RaisedButton label="Force Add Task" primary={true} onClick={this.handleAddNewClick} />
      //   <RaisedButton label="Create Messages" secondary={true} onClick={this.handleClearListClick} />
      // </div>
    );
  }

});

module.exports = TetherToolbar;
