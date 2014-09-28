
function normInt(arr){
  arr.forEach(function (el){
    el[0] = parseInt(el[0], 10);
  });

  return arr;
}

function getPercent(arr, totals){

  var res = [];
  for(var i = 0; i < arr.length; i++){
    res.push({
      year: arr[i][0],
      percent: arr[i][1] / totals[i][1]

    });
  }
  return res;
}

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

var ch_line = d3.svg.line()
.x(function(d) { return x(d.year); })
.y(function(d) { return y(d.percent); });

var mos_line = d3.svg.line()
.x(function(d) { return x(d.year); })
.y(function(d) { return y(d.percent); });

var syn_line = d3.svg.line()
.x(function(d) { return x(d.year); })
.y(function(d) { return y(d.percent); });


var svg = d3.select(".chart").append("svg")
.attr("w", w + margin.left + margin.right)
.attr("h", h + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json('assets/data/churches.json', function(error, data){
  if (error) return console.warn(error);

  var chs = normInt(_.pairs(data.church_count));
  var mos = normInt(_.pairs(data.mosque_count));
  var syn = normInt(_.pairs(data.synagogue_count));
  var total = _.pairs(data.total_count);

  chs = getPercent(chs,total);
  mos = getPercent(mos, total);
  syn = getPercent(syn, total);

  x.domain(d3.extent(chs, function(d) { return d.year; }));
  y.domain([0, 1]);

  svg.append("path")
  .datum(chs)
  .attr("class", "line")
  .attr('stroke', 'steelblue')
  .attr("d", ch_line);

  svg.append("path")
  .datum(syn)
  .attr("class", "line")
  .attr('stroke', 'red')
  .attr("d", syn_line);

  svg.append("path")
  .datum(mos)
  .attr("class", "line")
  .attr('stroke', 'green')
  .attr("d", mos_line);

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
  .text("Number of Occurances");

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






