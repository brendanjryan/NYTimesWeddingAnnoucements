var d3 = require('d3');
var _ = require('underscore');
var $ = require('jquery');
var colors = require('../helpers/colors');

var chart = {};

chart.run = function(mount, dataPath, width, height) {
  d3.json(dataPath, function(data){
    line_chart.run(mount, data, width, height);
  });
}

var line_chart = (function(d3){

  var svg = null;
  var fill = d3.scale.linear();


var run = function(mount, data, width, height) {

   // convert all years to numbers
   var _data = Object.keys(data).map(function(career){
    return {
      'name': career,
      'value': data[career] * 10 // scale factor
    };
   });

   _data = _data.slice(0, 15);

    var chart = nv.models.multiBarChart()
        .x(function(d) { return d.name })
        .y(function(d) { return d.value })
        .showLegend(false)
        .showControls(false)
        .tooltips(false)
        .transitionDuration(500)
        .reduceXTicks(false)
        .staggerLabels(true)
        .rotateLabels(45)
        .height(height - 150)
        .width(width - 100)
        .groupSpacing(.1)
      ;


    chart.xAxis
      .tickPadding(10)
    ;
    chart.yAxis
      .tickFormat(d3.format(',.2f'))
      .axisLabelDistance(10);
    ;

    var obj = {
      key: 'poop',
      color: colors.medGray,
      values: _data
    };

    d3.select(mount).append('svg')
       .attr('width', width)
      .attr('height', height)
      .datum([obj])
      .call(chart);

  }

  var res = {};
  res.run = run;
  return res;
})(d3);

module.exports = chart;