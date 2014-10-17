var margin = {top: 20, right: 20, bottom: 30, left: 40},
    w = 1200 - margin.left - margin.right,
    h = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y-%m-%d").parse;

var x = d3.time.scale()
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

var area = d3.svg.area()
    .x(function(d) { return x(d.date); })
    .y0(h)
    .y1(function(d) { return y(d.count); });

var svg = d3.select(".chart").append("svg")
    .attr("w", w + margin.left + margin.right)
    .attr("h", h + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json('assets/data/article_dates.json', function(error, data){

  var _data = [];
  var ind = data['index'];
  var counts = data['data'];

  ind.forEach(function(date, i){
    var date = date.split("T")[0];
    var obj = {
      date: parseDate(date),
      count: counts[i][0]
    };
    _data.push(obj);
  });

  x.domain(d3.extent(_data, function(d) { return d.date; }));
  y.domain([0, d3.max(_data, function(d) { return d.count; })]);

  svg.append("path")
      .datum(_data)
      .attr("class", "data")
      .attr("d", area);

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
      .text("# Of Articles");
});




