var d3 = require('d3');
var _ = require('underscore');
var $ = require('jquery');

var CustomTooltip = require('../components/CustomTooltip');

var chart = {};

chart.run = function(mount, dataPath, r) {
  d3.json(dataPath, function(data){
    force_chart.run(mount, data);
  });
}

var force_chart = (function(d3) {
  var GROUPS = {
    'male': 0,
    'female': 1
  };
  var svg = null;
  var width = 960;
  var height = 800;
  var n = 0;
  var index = {};
  var school_names = [];
  var nodes = [];
  var links = [];
  var tooltip = CustomTooltip("marriage_tooltip", 240);
  var damper = 0.1;

  var frequency_centers = [
  {x: width, y: width/2},
  {x: (width)/20, y: width/2}
  ];
  var fill = d3.scale.ordinal()
  .domain([0,1])
  .range(['#A1CAF1','#FFB6C1']);


  var charge = function(node) {
    return -1 * Math.pow(node.radius, 3.0);
  }
  var force = d3.layout.force()
  .friction(0.9)
  .linkDistance(function (link){
    return link.source.school == link.target.school
    ? 10
    : 400
    ;
  })
  .gravity(-.01)
  .charge(function(node){return -1 * Math.pow(node.r,2.0)/8;})
  .size([width, height]);

  function move_towards_frequency(alpha) {
    return function(d) {
      var target = frequency_centers[d.group];
      d.x = d.x + (target.x - d.x) * (damper + 0.07) * alpha * 1.1;
      d.y = d.y + (target.y - d.y) * (damper + 0.07) * alpha * 1.1;
    };
  }

// Returns an event handler for fading a given chord group.
function fade(g, i, opacity) {
    svg.selectAll(".link")
      .filter(function(d) { return d.source.school != g.school && d.target.school != g.school; })
      .transition()
      .style("opacity", opacity);
  }


  var run = function(mount, data) {
    svg = d3.select(mount).append("svg")
    .attr("width", width)
    .attr("height", height);
  //fills the data array
  processData(data);
  force
  .nodes(nodes)
  .links(links)
  .start();

  var link = svg.selectAll(".link")
  .data(links)
  .enter().append("line")
  .attr("class", "link")
  .style("stroke-width", function(d) { return Math.sqrt(d.value); })
  .style('stroke', '#999')
  .style("opacity", .8);


  var node = svg.selectAll(".node")
  .data(nodes)
  .enter().append("circle")
  .attr("class", "node")
  .attr("r", function(d) { return Math.sqrt(d.total)/2;})
  .style("fill", function(d) { return fill(d.group); })
  .style("stroke", function(d) { return d3.rgb(fill(d.group)).darker(2); })
  .style("opacity", 1)
  .on("mouseover", function(d, i) {show_details(d, i, this); fade(d,i, 0.025)} )
  .on("mouseout", function(d, i) {hide_details(d, i, this); fade(d, i, 0.8)} );
;
  force.on("tick", function(e) {
    node.each(move_towards_frequency(e.alpha))
    link.attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; })
    node.attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
  });
}


function show_details(data, i, element) {
  d3.select(element).attr("stroke", "black");
  var content = "<span class=\"name\">School:</span><span class=\"value\"> " + data.school + "</span><br/>";
  tooltip.showTooltip(content, d3.event);
}

function hide_details(data, i, element) {
  d3.select(element).attr("stroke", function(d) { return d3.rgb(fill(d.group)).darker();} );
  tooltip.hideTooltip();
}


function processData(data) {

  data.forEach(function(school){
    var total = school['male'] + school['female'];
    var group = Math.round(Math.random());//school['male'] > school['female'] ? GROUPS['male'] : GROUPS['female'];

    nodes.push({'school': school['school'], 'group': group, 'total': total});
    if (school_names.indexOf(school['school']) === -1) {
      school_names.push(school['school'])
    }
    school.connections.forEach(function(connection){
      var _group = Math.round(Math.random());//connection['male'] > connection['female'] ? GROUPS['male'] : GROUPS['female'];
      if (school_names.indexOf(connection['school']) === -1) {
        school_names.push(connection['school'])
      }
      if(school['school'] !== connection['school']) {
        links.push({
          'source': school_names.indexOf(school['school']), //F IX THIS
          'target': school_names.indexOf(connection['school']),
          'group': _group,
          'value': connection['total']
        });


      }
    });
  });


}


var res = {};
res.run = run;
return res;
})(d3, CustomTooltip);

module.exports = chart;
