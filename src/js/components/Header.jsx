const React = require('react');

var Router = require('react-router');
var Link = Router.Link;

let Header = React.createClass({

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
          <Link to="app"><a className="item"><i className="home icon"></i> Home</a></Link>
          <Link to="settings"><a className="item"><i className="settings icon"></i> Settings</a></Link>
          <div className="item">
            <button className="ui primary button">Sign up</button>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Header;
