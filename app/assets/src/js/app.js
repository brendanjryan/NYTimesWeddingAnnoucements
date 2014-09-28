
var App = require('./components/app.jsx');

// data vis imports
var schoolBubble = require('./charts/school_counts');

var React = require('react');

React.renderComponent(App(), document.getElementById('app'), function(){


  // ATTACH CHART HANDLERS HERE

  // charts have the API (mount, data, width, height)
  schoolBubble.run('#chart','assets/data/schools_counts.json', 940, 600);
});


