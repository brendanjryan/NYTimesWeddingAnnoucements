
var diameter = 960,
color = d3.scale.category20c();
var bubble = d3.layout.pack()
//.sort(null)
.size([diameter, diameter])
.value(function(d){return d.size || 0;})
.padding(1.5);

var svg = d3.select(".chart").append("svg")
.attr("width", diameter)
.attr("height", diameter)
.attr("class", "bubble")
.style('display', 'block')
.style('margin', '0 auto');


d3.json("assets/data/rabbis.json", function(error, data) {

  var flag = false;
  data = data['0'];
  var _data = {'name': 'Rabbi', 'children': []};
  for(var c in data){
    _data.children.push({name: c, size: data[c]});
  }

  var node = svg.selectAll(".node")
  .data(bubble.nodes(_data))
  .enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
  .text(function(d) { return d.name.split("Rabbi")[1]; });

  node.append("circle")
  .attr("r", function(d) { return d.r; })
  .style("fill", function(d) { return color(d.name); })
  .style({opacity:'0.8'});

  node.append("text")
  .attr("dy", ".1em")
  .style("text-anchor", "middle")
  .text(function(d) { return d.name.split("Rabbi")[1].substring(0, d.r / 3); })
  .style({opacity:'0.5'})
  .style({'font-size': '.75rem'});

  node
  .on('mouseover', function(d){
    var sel = d3.select(this).style({opacity:'1.0'})
    sel.select("text").style({opacity:'1.0'});

  })
  .on('mouseout', function(d){
    var sel = d3.select(this).style({opacity:'0.8',});
    sel.select("text").style({opacity:'0.5'});
  });

  d3.select('circle').style('fill', 'white');

});

d3.select(self.frameElement).style("height", diameter + "px");
