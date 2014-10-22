var d3 = require('d3');
var _ = require('underscore');
var $ = require('jquery');

var chart = {};

chart.run = function(mount, dataPath, r) {
  d3.json(dataPath, function(data){
    chord_chart.run(mount, data, r);
  });
}

var chord_chart = (function(d3) {
  var GENDERS = {
    'male': 0,
    'female': 1
  };

 var schools = {};
 var n = 0;
 var arr = [];
 var connections = [];
 var couples = [];
 var svg = null;
 var school_names = [];
 var gender_connections = [];
 var gender_nodes = [];
 var fill = d3.scale.linear();

 var run = function(mount, data, r) {
  var outerRadius = r / 2,
  innerRadius = outerRadius - 20,
  w = outerRadius * 2 + 300,
  h = outerRadius * 2 + 300,
  format = d3.format(",.3r");

  var couples = [];

  // art generator for groups
  var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

  // chord generator
  var chord = d3.svg.chord()
  .radius(innerRadius);

  (data).forEach(function(school){
    school.connections.forEach(function(connection){
      couples.push({
        source: schoolMap(school.school),
        dest: schoolMap(connection.school),
        total: connection.total,
        maleCount: connection.male,
        femaleCounts: connection.female
      });
    });
  });

  //setup fill domain
  fill.domain([0,1])
  .range(['#45FFFF','#E00B00']);

  // Initialize a square matrix of school chords
  for (var i = 0; i < n; i++) {
    arr[i] = [];
    gender_connections[i] = [];
    for (var j = 0; j < n; j++) {
      arr[i][j] = 0;
      gender_connections[i][j] = 0;
    }
  }

  // Populate the matrices, and stash a map from id to country.
  couples.forEach(function(c) {
    if (c.source.id !== c.dest.id) {
      arr[c.source.id][c.dest.id] = c.total;
    }

    connections[c.source.id] = c.source;
    connections[c.dest.id] = c.dest;
    debugger;
    gender_connections[c.source.id][c.dest.id] =
      c.femaleCounts / c.maleCount
  });

  // get the predominant gender for each node
  //
  data.forEach(function(school){
    gender_nodes[schoolMap(school.school).id] = school.female / school.male;
  });
  debugger;
  var layout = d3.layout.chord()
  .sortGroups(d3.descending)
  .sortSubgroups(d3.descending)
  .sortChords(d3.descending)
  .padding(.04)
  .matrix(arr);
  svg = d3.select(mount).append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("g")
  .attr("transform", "translate(" + w/2 + "," + h/2 + ")")
  .style('display', 'block')
  .style('margin', '0 auto')
  ;

  // g draw group paths
  var g = svg.selectAll('.group')
  .data(layout.groups)
  .enter().append('g')
  .attr('class', 'group')
  ;

  // Groups
  g.append('path')
  .style("fill", function(d) { return fill(gender_nodes[d.index]); })
  .style("stroke", function(d) { return d3.rgb(fill(gender_nodes[d.index])).darker();})
  .attr("d", arc)
  .on("mouseover", fade(.1))
  .on("mouseout", fade(1));


  // labels
  g.append("text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .attr("transform", function(d) {
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
    + "translate(" + (innerRadius + 26) + ")"
    + (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .text(function(d) { return connections[d.index].name; })
  ;

  // Chords
  svg.append("g")
  .attr("class", "chord")
  .selectAll("path")
  .data(layout.chords)
  .enter().append("path")
  .attr("d", chord)
  .style("stroke", function(d) { return d3.rgb(getFillLink(d)).darker(); })
  .style("fill", function(d) { return getFillLink(d); })
  .style("opacity", 1)
  .on("mouseover", fade(.05))
  .on("mouseout", fade(1))
  ;

}
   // Memoize the specified school, computing a unique id.
   function schoolMap(d) {
    return schools[d] || (schools[d] = {
      name: d,
      id: n++
    });
  }

  // Returns an event handler for fading a given chord group.
  function fade(opacity) {
    return function(g, i) {
      svg.selectAll(".chord path")
      .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
      .style("opacity", opacity);
    };
  }

  function getFillLink(link){
    return fill(
      gender_connections[link.source.index][link.target.index]
    );

  }

  var res = {};
  res.run = run;
  return res;
})(d3);

module.exports = chart;
