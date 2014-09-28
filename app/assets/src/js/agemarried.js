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

var color = d3.scale.category10();

var svg = d3.select(".chart").append("svg")
.attr("w", w + margin.left + margin.right)
.attr("h", h + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.csv('assets/data/agemarried.csv', function(error, data){


  if (error) return console.warn(error);


  x.domain(d3.extent(data, function(d) { return d.year; }));
  y.domain([0, 0.65]);

  var categories = ['20-25 percent','25-30 percent','30-35 percent','35-40 percent','40-45 percent'];

  var legend = svg.selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'legend');


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

  categories.forEach(function(cat){
    svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr('stroke', function(d){ return color(cat); })
    .attr("d", d3.svg.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d[cat]); })
      );


    svg.append("text")
    .attr("transform", "translate(" + (w-500) + "," + y(data[data.length - 5][cat]) + ")")

    .attr("dy", ".35em")
    .attr("text-anchor", "start")
    .style("fill", "black")
    .text(cat);
  });

});




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
