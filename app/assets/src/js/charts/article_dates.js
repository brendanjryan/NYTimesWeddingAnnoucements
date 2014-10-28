var d3 = require('d3');
var _ = require('underscore');
var $ = require('jquery');

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

  data.forEach(function(d){
    d.year = +d.year
  });

    var chart = nv.models.multiBarChart()
        .x(function(d) { return d.year })
        .y(function(d) { return d.count })
        .showLegend(false)
        .showControls(false)
        .tooltips(false)
        .transitionDuration(500)
        .reduceXTicks(true)
        .staggerLabels(true)
        .rotateLabels(45)
        .height(height)
        .width(width)
        .groupSpacing(.1)
      ;


    chart.xAxis
      .axisLabel("Year")
      .tickPadding(10)
    ;
    chart.yAxis
      .axisLabel("Number of Articles")
      .tickFormat(d3.format(',.1f'));

    var obj = {
      key: 'poop',
      color: '#8C8C8C',
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