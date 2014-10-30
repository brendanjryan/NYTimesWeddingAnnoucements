var $ = require('jquery');
var App = require('./components/app.jsx');
var Router = require('./components/router.jsx');


var React = require('react');
var oracle = require('./oracle');


$(document).on('ready', function(){


  var oracle = oracle.initOracle();

  //setup handler for oracle
  var router = React.renderComponent(
    <Router oracle={oracle}>,
    document.getElementById('app')
  );

  oracle.on('update', function(data){
    router.setProps({app_state: data})
  })

});












