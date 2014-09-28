
var LIM = 1;
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


d3.json("assets/data/careers2.json", function(error, data) {

  var flag = false;
  var _data = {'name': 'careers', 'children': []};
  for(var c in data){

    if(data[c] > LIM){
      _data.children.push({name: c, size: data[c] });
    }
  }
  ///Take square root of radius
  ///move larger circle to center
  ///
  var node = svg.selectAll(".node")
  .data(bubble.nodes(_data))
  .enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
  .text(function(d) { return d.name; });

  node.append("circle")
  .attr("r", function(d) { return d.r; })
  .style("fill", function(d) { return color(d.name); })
  .style({opacity:'0.8'});

  node.append("text")
  .attr("dy", ".2em")
  .style("text-anchor", "middle")
  .text(function(d) { return d.name; })
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
