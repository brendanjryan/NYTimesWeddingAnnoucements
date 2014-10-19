var App = require('./components/app.jsx');
var test = require('./charts/test.js');
// data vis imports
var schoolBubble = require('./charts/school_counts');
var marriages = require('./charts/marriages.js');
var marriage_links = require('./charts/marriage_links.js');

var React = require('react');
var $ = require('jquery');

//collect all data and then render compoenent with cortex
$.get('/api/sources', function(data) {
  var sources = data.sources;
  React.renderComponent(App({sources: sources}), document.getElementById('app'), function(){
});

  // ATTACH CHART HANDLERS HERE

  // charts have the API (mount, data, width, height)
  schoolBubble.run(
    '#schoolCounts',
    'assets/data/schools_counts.json',
     940,
    600
  );

  marriages.run(
    '#marriages',
    'assets/data/schools_couples.json',
    480
  );

  marriage_links.run(
    '#marriageLinks',
    'assets/data/schools_couples_genders_links.json',
    400
  );

});


