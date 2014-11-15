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

    var chart = nv.models.multiBarChart()
        .x(function(d) { return d.school })
        .y(function(d) { return d.percent })
        .showLegend(false)
        .showControls(false)
        .tooltips(false)
        .transitionDuration(500)
        .showYAxis(true)
        .reduceXTicks(false)
        .staggerLabels(true)
        .rotateLabels(45)
        .height(height - 100)
        .width(width)
        .groupSpacing(.1)
      ;

    chart.xAxis
      .tickPadding(10)
    ;

    chart.yAxis
      .axisLabel("Number of Mentions (%)")
      .axisLabelDistance(10)
      .tickFormat(d3.format(',.1%'));

    var obj = {
      key: 'poop',
      color: colors.medGray,
      values: data
    };

    d3.select(mount).append('svg')
       .attr('width', width)
      .attr('height', height)
      .datum([obj])
      .call(chart);

    nv.utils.windowResize(chart.update);
  }

  var res = {};
  res.run = run;
  return res;
})(d3);

module.exports = chart;