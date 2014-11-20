var d3 = require('d3');
var _ = require('underscore');
var $ = require('jquery');
var colors = require('../helpers/colors')

var chart = {};

chart.run = function(mount, dataPath, r) {
  d3.json(dataPath, function(data){
    chord_chart.run(mount, data, r);
  });
}

var chord_chart = (function(d3) {
 var schools = {};
 var n = 0;
 var arr = [];
 var connections = [];
 var couples = [];
 var svg = null;

 var run = function(mount, data, r) {
  var outerRadius = r / 2,
  innerRadius = outerRadius - 20,
  w = outerRadius * 2 + 300,
  h = outerRadius * 2 + 300,
  format = d3.format(",.3r");

  var couples = [];
  var school_colors = d3.range(25);
  var fill = colors.lightGray;

  // art generator for groups
  var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

  // chord generator
  var chord = d3.svg.chord()
  .radius(innerRadius);

  (data).forEach(function(school){
    school.data.forEach(function(school_inner){
      couples.push({
        color: school.color,
        source: schoolMap(school.school),
        dest: schoolMap(school_inner.school),
        count: school_inner.count,
      });
    });
    school_colors[schoolMap(school.school).id] = school.color;
  });

  // Initialize a square matrix of school chords
  for (var i = 0; i < n; i++) {
    arr[i] = [];
    for (var j = 0; j < n; j++) {
      arr[i][j] = 0;
    }
  }


  // Populate the matrices, and stash a map from id to couple.
  couples.forEach(function(c) {
    arr[c.source.id][c.dest.id] = c.count;
    school_colors[c.source.id] = c.color;
    connections[c.source.id] = c.source;
    connections[c.dest.id] = c.dest;
  });

  // make relations symmetric
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      arr[i][j] = Math.max(arr[i][j], arr[j][i]);
    }
  }
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

  g.append('path')
  .style("fill", function(d) { return school_colors[d.index]; })
  .style("stroke", function(d) { return d3.rgb(school_colors[d.index]).darker(1.75);})
  .attr("d", arc)
  .on("mouseover", fade(.1, fill, school_colors))
  .on("mouseout", fade(1, fill));

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

  // draw chords
  svg.append("g")
  .attr("class", "chord")
  .selectAll("path")
  .data(layout.chords)
  .enter().append("path")
  .attr("d", chord)
  .style("stroke", function(d) { return d3.rgb(fill).darker(.75); })
  .style("fill", function(d) { return fill })
  .style("opacity", 1)
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
  function fade(opacity, def, colors) {
    return function(g, i) {
      var color = colors ? colors[i] : def;

      svg.selectAll(".chord path")
      .filter(function(d) { return d.source.index !== i && d.target.index !== i; })
      .transition()
      .style("opacity", opacity)
      .style('fill', def)
      .style('stroke', d3.rgb(def).darker());
      ;

      svg.selectAll(".chord path")
      .filter(function(d) { return d.source.index === i || d.target.index === i; })
      .transition()
      .style('opacity', 1) //always full
      .style('fill', color)
      .style('stroke', d3.rgb(color).darker())
      ;
    };
  }


  var res = {};
  res.run = run;
  return res;
})(d3);

module.exports = chart;
