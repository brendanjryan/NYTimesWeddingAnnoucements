var d3 = require('d3');
var _ = require('underscore');
var $ = require('jquery');

var chart = {};

var colors = require('../helpers/colors');
chart.run = function(mount, dataPath, width, height) {

  d3.json(dataPath, function(data){
    line_chart.run(mount, data, width, height);
  });
}

var line_chart = (function(d3){

  var categories = ['20-25 percent','25-30 percent','30-35 percent','35-40 percent','40-45 percent'];

  var margin = {top: 20, right: 20, bottom: 30, left: 40}
  var svg = null;
  var legend = null;
  var marker = null;

  var fill = d3.scale.ordinal()
    .domain(d3.range(categories.length))
    .range(colors.range)
  ;

  var run = function(mount, data, width, height) {
    // convert years to numbers
    data.forEach(function(item){
      item.year = +item.year
    });

    var obj = {};
    categories.forEach(function(cat, i){ obj[cat] = {
      key: cat.split(' ')[0] + ' Years ',
      values: [],
      area: false,
      color: fill(i)
    }});


    data.forEach(function(year){
      categories.forEach(function(cat){
        obj[cat].values.push({
          x: year.year,
          y: year[cat]
        });
      });
    });

    data = [];
    Object.keys(obj).forEach(function(cat){
      data.push(obj[cat]);
    });

   var chart = nv.models.lineChart()
      .margin(margin)
      .useInteractiveGuideline(true)
      .transitionDuration(350)
      .showLegend(true)
      .showYAxis(true)
      .showXAxis(true)
      .width(width)
      .height(height)
    ;
    chart.xAxis
      .axisLabel('Year')
    ;

  chart.yAxis
    .axisLabel('Marriage %')
    .tickFormat(d3.format('.02f'))
  ;

  svg = d3.select(mount).append('svg')
      .attr('width', width)
      .attr('height', height)
      .datum(data)
      .call(chart)
  chart.update();
  nv.utils.windowResize(chart.update);

  }

  var res = {};
  res.run = run;
  return res;


})(d3);

module.exports = chart;

