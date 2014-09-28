var margin = {top: 20, right: 20, bottom: 30, left: 40},
    w = 1200 - margin.left - margin.right,
    h = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, w], .175);

var y = d3.scale.linear()
    .range([h, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select(".chart").append("svg")
    .attr("w", w + margin.left + margin.right)
    .attr("h", h + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json('assets/data/page_num_bins.json', function(error, data){
    //count sections and split

    var bins = [];
    data.forEach(function(bin){
        bins.push({
         min : _.min(bin),
         max : _.max(bin),
         count : bin.length
        });
    });

    var max = _.max(bins, function(bin){return bin.count;}).count;

    x.domain(d3.range(bins.length));
    y.domain([0, max]);


    var blues = d3.scale.linear()
        .range([0,255])
        .domain([0, max])
    /*
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + h + ")")
      .call(xAxis);
  */
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Number of Articles");


    //append bars
    svg.selectAll(".bar")
      .data(bins)
      .enter().append("rect")
      .attr("class", "bar")
      //.attr('fill', function(d){ return "rgb(0, 0, " + Math.round(blues(d.count)) + ")";})
      .attr("x", function(d, i) { return x(i); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.count); })
      .attr("height", function(d) { return  h - y(d.count); });


    //Create labels
    svg.selectAll(".label .label-max")
       .data(bins)
       .enter()
       .append("text")
       .attr('class','label')
       .text(function(d) {
            return d.max;
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return x(i) + x.rangeBand() / 2;
       })
       .attr("y", function(d) {
            return y(d.count) + 18;
       })
       .attr("font-family", "sans-serif")
       .attr("font-size", "12px")
       .attr("fill", "white");

    svg.selectAll(".label .label-max")
        .data(bins)
        .enter()
        .append("text")
        .attr('class','label')
        .text(function(d) {
            return d.min;
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return x(i) + x.rangeBand() / 2;
        })
        .attr("y", function(d) {
            return y(d.count) + 38;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "white");

});