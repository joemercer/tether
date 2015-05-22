const React = require('react');

const App = require('./components/App.jsx');

const Dashboard = require('./components/Dashboard.jsx');
const Settings = require('./components/Settings.jsx');

// # Routes

const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

let routes = (
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute handler={Dashboard}/>
    <Route name="settings" handler={Settings}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
