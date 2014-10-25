var d3 = require('d3');
var _ = require('underscore');
var $ = require('jquery');

var chart = {};

chart.run = function(mount, dataPath, r) {
  d3.json(dataPath, function(data){
    pie_chart.run(mount, data, r);
  });
}

var pie_chart = (function(d3){


  var svg = null;
  var fill = d3.scale.linear();

//setup range and domain on data




var run = function(mount, data, r) {


  var outerRadius = r/2;
  var innerRadius = 0;
  var width = outerRadius * 2 + 300;
  var height = outerRadius * 2 + 300;
   // convert all years to numbers

  data.forEach(function(d){
    d.year = +d.year
  });
  data = data.sort(function(a,b){
    return b.count - a.count;
  });

  fill.domain([
      d3.min(data, function(d){return d.year}),
      d3.max(data, function(d){return d.year})
  ])
  .range(['#bebebe', '#252525']);
  //setup range and domain on data
  var arc = d3.svg.arc()
    .outerRadius(r/2 - 25)
    .innerRadius(0);

  var pie = d3.layout.pie()
    .sort(null)
    .value(function(d){return d.count});

    svg = d3.select(mount).append('svg')
      .attr('width', width)
      .attr('height', height)
    .append('g')
      .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

    var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("d", arc)
      .style("fill", function(d) {return fill(d.data.year); })
      .attr('stroke', '#fff')
      .attr('stroke-width', '.75')
      .attr('class', 'pie-slice')

      .on('mouseover', function(){
        this.style.fill =  "#A9E4CF";
      })
      .on('mouseleave', function(g,i){
        this.style.fill = fill(g.data.year)
      });

  g.append("text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .attr("transform", function(d) {
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
    + "translate(" + (outerRadius) + ")"

    + (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .text(function(d) { return d.data.year; })
  ;

  }
  var res = {};
  res.run = run;
  return res;
})(d3);

module.exports = chart;