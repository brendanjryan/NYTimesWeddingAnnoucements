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

  var margin = {top: 50, right: 50, bottom: 50, left: 50}
  var svg = null;
  var legend = null;
  var marker = null;

  var fill = d3.scale.ordinal()
    .domain(d3.range(2))
    .range(colors.range)
  ;
  var categories = [
    'summa_cum_laude_count',
    'cum_laude_count',
    'magna_cum_laude_count'
  ];

  var run = function(mount, data, width, height) {
    var res = []
    categories.forEach(function(cat, i){
      var obj = {
        key: cat.split('_').join(' '),
        values: [],
        color: fill(i),
        interpolate: 'basis'
      };

      Object.keys(data[cat]).forEach(function(year){
        obj.values.push({
          x: +year,
          y: data[cat][year] / data['total_count'][year]
        });
      });
      res.push(obj);
    });
   var chart = nv.models.lineChart()
      .margin(margin)
      .useInteractiveGuideline(true)
      .transitionDuration(350)
      .showLegend(true)
      .showYAxis(true)
      .showXAxis(true)
      .width(width - 50)
      .height(height - 50)

    ;
    chart.xAxis
      .axisLabel('Year')
    ;

  chart.yAxis
    .axisLabel('Occurances (%)')
    .tickFormat(d3.format('.01%'))
  ;

  svg = d3.select(mount).append('svg')
      .attr('width', width)
      .attr('height', height)
      .datum(res)
      .call(chart)
  chart.update();

  }

  var res = {};
  res.run = run;
  return res;


})(d3);

module.exports = chart;

