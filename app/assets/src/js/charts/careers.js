var _ = require('underscore');
var $ = require('jquery');
var d3 = require('d3');
var colors = require('../helpers/colors');
var cloud = require('../vendor/d3.layout.cloud');
var chart = {};

chart.run = function(mount, dataPath, width, height) {
  d3.json(dataPath, function(data){
    word_chart.run(mount, data, width, height);
  });
}

var word_chart = (function(d3){

  var margin = null;

  var run = function(mount, data, width, height) {

    var fill = d3.scale.ordinal()
      .domain(d3.range(colors.range.length))
      .range(colors.range);
      debugger;

  var dataWords = [];
  var maxVal = 0;

  Object.keys(data).forEach(function(career){
    if (data[career] > maxVal) { maxVal = data[career]; }

    dataWords.push({
      value: data[career],
      text: career
    });
  });

  cloud().size([width, height])
      .words(dataWords)
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return 10 + 80 * d.value/ maxVal; })
      .on("end", draw)
      .start();

  function draw(words) {
    d3.select(mount).append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width/2 + "," + height/2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(Math.random() * colors.range.length); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; })
        .on('mouseover', fade(.4))
          .on("mouseout", fade(1))
  }

  // Returns an event handler for fading a given chord group.
  function fade(opacity) {
    return function(g, i) {
      d3.selectAll(mount + " text")
      .filter(function(d, ind) { return ind != i; })
      .transition()
      .style("opacity", opacity);
    };
  }
  }

  var res = {};
  res.run = run;
  return res;


})(d3);

module.exports = chart;
