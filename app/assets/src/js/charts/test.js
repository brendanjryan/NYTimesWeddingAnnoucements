var d3 = require('d3');
var _ = require('underscore');
var $ = require('jquery');

!(function(){


  d3.json('assets/data/schools_couples.json', function(data) {
    var w = 480,
    h = 500,
    r1 = Math.min(w, h) / 2 - 4,
    r0 = r1 - 20,
    format = d3.format(",.3r");

    var couples = [];

    var fill = d3.scale.ordinal()
    .domain(d3.range(4))
    .range(["#000000", "#FFDD89", "#957244", "#F26223"]);


  // art generator for groups
  var arc = d3.svg.arc()
  .innerRadius(r0)
  .outerRadius(r1);

  // chord generator
  var chord = d3.svg.chord()
  .radius(r0);

  var schools = {};
  var n = 0;
  var arr = [];
  var connections = [];
  var couples = [];

  Object.keys(data).forEach(function(school){
    Object.keys(data[school]).forEach(function(school_inner){
      couples.push({
        source: schoolMap(school),
        dest: schoolMap(school_inner),
        count: data[school][school_inner],
      });
    });
  });

  // Initialize a square matrix of school chords
  for (var i = 0; i < n; i++) {
    arr[i] = [];
    for (var j = 0; j < n; j++) {
      arr[i][j] = 0;
    }
  }


  // Populate the matrices, and stash a map from id to country.
  couples.forEach(function(c) {
    arr[c.source.id][c.dest.id] = c.count;

    connections[c.source.id] = c.source;
    connections[c.dest.id] = c.dest;
  });

  //debugger;

  var layout = d3.layout.chord()
    .sortGroups(d3.descending)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending)
    .padding(.04)
    .matrix(arr);

  debugger;

  var svg = d3.select("#test").append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("g")
  .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

  svg.append('g').selectAll('path')
    .data(layout.groups)
  .enter().append('path')
  .style("fill", function(d) { return fill(d.index); })
  .style("stroke", function(d) { return fill(d.index); })
  .attr("d", arc)
  //.on("mouseover", fade(.1))
  //.on("mouseout", fade(1));

  svg.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(layout.chords)
  .enter().append("path")
    .attr("d", chord)
    .style("fill", function(d) { return fill(d.target.index); })
    .style("opacity", 1);


   // Memoize the specified school, computing a unique id.
   function schoolMap(d) {
    return schools[d] || (schools[d] = {
      name: d,
      id: n++
    });
  }
});

})();