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

  var categories = ['20-25 percent','25-30 percent','30-35 percent','35-40 percent','40-45 percent'];

  var margin = {top: 20, right: 20, bottom: 30, left: 40}

  var x = d3.scale.linear();
  var y = d3.scale.linear();

  var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom");

  var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  .ticks(10);

  var svg = null;
  var legend = null;

  var fill = d3.scale.category10();

  var run = function(mount, data, width, height) {
    // convert years to numbers
    data.forEach(function(item){
      item.year = +item.year
    });

    xAxis.ticks(data.length/2);

    svg = d3.select(mount).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    debugger;
    x.range([0, width])
    .domain(d3.extent(data, function(d) { return d.year; }));

    y.range([height, 0])
    .domain([0, 1]);

    legend = svg.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'legend');

    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", ".71em")
  .style("text-anchor", "end")
  .text("Mention %");

  categories.forEach(function(cat){
    svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr('stroke', function(d){ return fill(cat); })
    .attr("d", d3.svg.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d[cat]); })
  );
    /*
  svg.append("text")
    .attr("transform", "translate(" + (width-500) + "," + y(data[data.length - 5][cat]) + ")")
    .attr("dy", ".35em")
    .attr("text-anchor", "start")
    .style("fill", "black")
    .text(cat);
    */
  });
  }

  var res = {};
  res.run = run;
  return res;


})(d3);

module.exports = chart;

String.prototype.trim = function(){
  var firstInd = 0;
  var lastInd = 0;

  for(var i = 0; i < this.length/2; i++){
    if(this[i] !== ' '){
      firstInd = i;
      break;
    }
  }

  for(var j = this.length; j > this.length/2; j--){
    if(this[k] !== ' '){
      lastInd = j;
      break;
    }
  }
  return Array.prototype.slice.call(this, firstInd, lastInd);
}
