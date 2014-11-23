var React = require('react/addons');
var d3 = require('d3');
var _ = require('underscore');
var $ = require('jquery');
var SparkLine = require('react-sparkline');
var colors = require('../helpers/colors');

var chart = {};

chart.run = function(mount, dataPath, width, height) {
  d3.json(dataPath, function(data){
    line_chart.run(mount, data, width, height);
  });
}

var line_chart = (function(d3){


var run = function(mount, data, width, height) {

   // convert all years to numbers

  data.forEach(function(d){
    d.year = +d.year
  });

    return React.renderComponent(SparkLine({data: data}) , mount);
  }

  var res = {};
  res.run = run;
  return res;
})(d3);

module.exports = chart;