const React = require('react');
const ActionCreator = require('../actions/ActionCreators');
const mui = require('material-ui');

let {Toolbar, ToolbarGroup, DropDownMenu, FontIcon, DropDownIcon, RaisedButton} = mui;

let TetherToolbar = React.createClass({

  triggerAddNewContact(e) {
    debugger;
  },

  render() {
    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <span>Search Bar</span>
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <RaisedButton label="Add Contact" secondary={true} onClick={this.triggerAddNewContact} />
          <span className="mui-toolbar-separator">&nbsp;</span>
          <RaisedButton label="Login" primary={true} />
        </ToolbarGroup>
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
