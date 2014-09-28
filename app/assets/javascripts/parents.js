var margin = {top: 20, right: 20, bottom: 30, left: 40},
w = 1200 - margin.left - margin.right,
h = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
.range([0,w]);

var y = d3.scale.linear()
.range([h, 0]);

var xAxis = d3.svg.axis()
.scale(x)
.orient("top");

var yAxis = d3.svg.axis()
.scale(y)
.orient("left")
.ticks(10);

var ff_line = d3.svg.line()
.x(function(d) { return x(d.year); })
.y(function(d) { return y(d['her father count percent']); });


var fm_line = d3.svg.line()
.x(function(d) { return x(d.year); })
.y(function(d) { return y(d['her mother count percent']); });


var mf_line = d3.svg.line()
.x(function(d) { return x(d.year); })
.y(function(d) { return y(d['his father count percent']); });


var mm_line = d3.svg.line()
.x(function(d) { return x(d.year); })
.y(function(d) { return y(d['his mother count percent']); });


var svg = d3.select(".chart").append("svg")
.attr("w", w + margin.left + margin.right)
.attr("h", h + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json('assets/data/parents.json', function(error, data){
  if (error) return console.warn(error);

  var _data = [];
  for(var year in data){
    var o ={
      year: parseInt(year, 10),
    };
    _.extend(o, data[year]);
    _data.push(o);
  }

  x.domain(d3.extent(_data, function(d) { return d.year; }));
  y.domain([0, .8]);

  svg.append("path")
  .datum(_data)
  .attr("class", "line")
  .attr('stroke', 'red')
  .attr("d", ff_line);
/*
  svg.append("path")
  .datum(_data)
  .attr("class", "line")
  .attr('stroke', 'pink')
  .attr("d", fm_line);
*/

  svg.append("path")
  .datum(_data)
  .attr("class", "line")
  .attr('stroke', 'black')
  .attr('stroke-dasharray', "5,5")
  .attr("d", mf_line);


  svg.append("path")
  .datum(_data)
  .attr("class", "line")
  .attr('stroke', 'steelblue')
  .attr("d", mm_line);

  svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + h + ")")
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

/*
  svg.append("text")
    .attr("transform", "translate(" + (w+4) + "," + y(chs[chs.length - 1].percent) + ")")
    .attr("dy", ".35em")
    .attr("text-anchor", "start")
    .style("fill", "black")
    .text("Churchs");

  svg.append("text")
    .attr("transform", "translate(" + (w+4) + "," + y(syn[syn.length - 1].percent) + ")")
    .attr("dy", ".35em")
    .attr("text-anchor", "start")
    .style("fill", "black")
    .text("Synagagues");
    //debugger;
  svg.append("text")
    .attr("transform", "translate(" + (w+4) + "," + y(mos[mos.length - 1].percent) + ")")
    .attr("dy", ".35em")
    .attr("text-anchor", "start")
    .style("fill", "black")
    .text("Mosques");

*/
  });






