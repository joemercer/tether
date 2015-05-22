const React = require('react');

// Defining these here because we'll need them in other places
// !!! probably want to make sure this all makes sense
// e.g. we might not need any Semantic js aspects
// window.$ = window.jQuery = require('jquery');
// const Semantic = require('../semantic/dist/semantic.min.js');

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
