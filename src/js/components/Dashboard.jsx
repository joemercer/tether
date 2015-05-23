const React = require('react');

const Messages = require('./Messages.jsx');

let Dashboard = React.createClass({

  getInitialState() {
    return {}
  },

  render() {
    return (
      <div>
        <Messages />
      </div>
    );
  }

});

module.exports = Dashboard;
