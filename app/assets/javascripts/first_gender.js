var margin = {top: 20, right: 20, bottom: 30, left: 40},
w = 1200 - margin.left - margin.right,
h = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y-%m-%d").parse;

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

var male_line = d3.svg.line()
.x(function(d) { return x(d.year); })
.y(function(d) { return y(d.male_percent); });

var female_line = d3.svg.line()
.x(function(d) { return x(d.year); })
.y(function(d) { return y(d.female_percent); });

var svg = d3.select(".chart").append("svg")
.attr("w", w + margin.left + margin.right)
.attr("h", h + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json('assets/data/genders.json', function(error, data){
  if (error) return console.warn(error);

  data.forEach(function(d){
    d.total = d.male_count + d.female_count;
    d.male_percent = d.male_count / d.total;
    d.female_percent = d.female_count / d.total;
  });

  x.domain(d3.extent(data, function(d) { return d.year; }));
  y.domain([0, 1]);

  svg.append("path")
  .datum(data)
  .attr("class", "line")
  .attr('stroke', 'steelblue')
  .attr("d", male_line);

  svg.append("path")
  .datum(data)
  .attr("class", "line")
  .attr('stroke', 'red')
  .attr("d", female_line);

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


  svg.append("text")
    .attr("transform", "translate(" + (w+4) + "," + y(data[data.length - 1].male_percent) + ")")
    .attr("dy", ".35em")
    .attr("text-anchor", "start")
    .style("fill", "black")
    .text("Male Mention");

  svg.append("text")
    .attr("transform", "translate(" + (w-10) + "," + y(data[data.length - 1].female_percent) + ")")
    .attr("dy", ".35em")
    .attr("text-anchor", "start")
    .style("fill", "black")
    .text("Female Mention");

});






