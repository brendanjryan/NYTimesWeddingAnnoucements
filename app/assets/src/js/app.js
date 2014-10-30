/** @jsx React.DOM */

var App = require('./components/app.jsx');
var Router = require('./components/router.jsx');

var React = require('react');
var Oracle = require('./helpers/oracle');

!(function(){

  var router = React.renderComponent(
    Router,
    document.getElementById('app')
  );

})();
