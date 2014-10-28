var d3 = require('d3');
var $ = require('jquery');
var _ = require('underscore');

var CustomTooltip = require('../components/CustomTooltip');

var chart = {};

chart.run = function(mount, dataPath, width, height){
  d3.json(dataPath, function(data) {
    custom_bubble_chart.init(data, mount, width, height);
    custom_bubble_chart.toggle_view('all');

 // create toggle buttons
 if(! $(mount + ' .filter-row').length) {
  debugger;
  var filterRow = $('<div />', {class: 'filter-row'});

  filterRow.append(
    $("<a />",
    {
      class: 'filter-button active',
      'text': 'View All',
      'data-filter': 'all'
    }
    )
    );
  filterRow.append(
    $("<a />",
    {
      class: 'filter-button',
      'text': 'Split by Gender',
      'data-filter': 'gender'
    }
    )
    );

  $(mount).prepend(filterRow);
}

$('.filter-row a').on('click', function(e) {
  var target = $(e.target);
  var filter = $(this).data('filter');
  $('.filter-button').removeClass('active');
  $(this).toggleClass('active');

  custom_bubble_chart.toggle_view(filter);
  return false;

});
});

}

var custom_bubble_chart = (function(d3, CustomTooltip) {
  "use strict";
  var width = 940,
  height = 600,
  tooltip = CustomTooltip("names_tooltip", 240),
  layout_gravity = -0.01,
  damper = 0.1,
  nodes = [],
  vis, force, circles, radius_scale;

  var COLORS = [
  '#C2F4F4', // baby blue
  '#F4C2C2' // baby pink
  ];

    var MAX_RADIUS = 60;
    var MIN_RADIUS = 2;

    var center = {x: width / 2, y: height / 2};

    var gender_centers = {
      "male": {x: width / 3, y: height / 2},
      "female" : {x: 2 * width / 3, y: height / 2}
    };

    var fill_color = d3.scale.ordinal()
    .domain(["male", "female"])
    .range(COLORS);

    function custom_chart(data, mount, w, h) {
      width = w ? w : width;
      height = h ? height : height;

      var max_amount = d3.max(data, function(d) { return parseInt(d.count, 10); } );
      radius_scale = d3.scale.pow().exponent(0.5).domain([0, max_amount]).range([MIN_RADIUS, MAX_RADIUS]);

    //create node objects from original data
    //that will serve as the data behind each
    //bubble in the vis, then add each node
    //to nodes to be used later
    data.forEach(function(d, ind){
      var node = {
        id: ind,
        radius: radius_scale(parseInt(d.count, 10)),
        value: d.count,
        name: d.name,
        gender: d.gender,
        x: Math.random() * 900,
        y: Math.random() * 800
      };
      nodes.push(node);
    });

    nodes.sort(function(a, b) {return b.value- a.value; });
    $(mount).empty();
    vis = d3.select(mount).append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "svg_vis");

    circles = vis.selectAll("circle")
    .data(nodes, function(d) { return d.id ;});

    circles.enter().append("circle")
    .attr("r", 0)
    .attr("fill", function(d) { return fill_color(d.gender) ;})
    .attr("stroke-width", 2)
    .attr("stroke", function(d) {return d3.rgb(fill_color(d.gender)).darker();})
    .attr("id", function(d) { return  "bubble_" + d.id; })
    .on("mouseover", function(d, i) {show_details(d, i, this);} )
    .on("mouseout", function(d, i) {hide_details(d, i, this);} )
    ;

    circles.transition().duration(2000).attr("r", function(d) { return d.radius; });
  }

  function charge(d) {
    return -Math.pow(d.radius, 2.0) / 8;
  }

  function start() {
    force = d3.layout.force()
    .nodes(nodes)
    .size([width, height]);
  }

  function display_group_all() {
    force.gravity(layout_gravity)
    .charge(charge)
    .friction(0.9)
    .on("tick", function(e) {
      circles.each(move_towards_center(e.alpha))
      .attr("cx", function(d) {return d.x;})
      .attr("cy", function(d) {return d.y;});
    });
    force.start();
    //hide_labels();
  }

  function move_towards_center(alpha) {
    return function(d) {
      d.x = d.x + (center.x - d.x) * (damper + 0.07) * alpha;
      d.y = d.y + (center.y - d.y) * (damper + 0.07) * alpha;
    };
  }

  // RANKINGS CODE
  function display_by_gender() {
    force.gravity(layout_gravity)
    .charge(charge)
    .friction(0.85)
    .on("tick", function(e) {
      circles.each(move_towards_gender(e.alpha))
      .attr("cx", function(d) {return d.x;})
      .attr("cy", function(d) {return d.y;});
    });
    force.start();
  }

  function move_towards_gender(alpha) {
    return function(d) {
      var target = gender_centers[d.gender];
      d.x = d.x + (target.x - d.x) * (damper + 0.07) * alpha * 1.1;
      d.y = d.y + (target.y - d.y) * (damper + 0.07) * alpha * 1.1;
    };
  }

function show_details(data, i, element) {
  d3.select(element).attr("stroke", "black");
  var content = "<span class=\"name\"></span><span class=\"value\"> " + data.name + "</span><br/>";
  content +="<span class=\"name\">Amount: </span><span class=\"value\">" + data.value + "</span><br/>";
  tooltip.showTooltip(content, d3.event);
}

function hide_labels() {
  hide_frequencies();
  hide_rankings();
}

function hide_details(data, i, element) {
  d3.select(element).attr("stroke", function(d) { return d3.rgb(fill_color(d.gender)).darker();} );
  tooltip.hideTooltip();
}

var my_mod = {};
my_mod.init = function (_data, mount, width, height) {
  custom_chart(_data, mount, width, height);
  start();
};

my_mod.display_all = display_group_all;
my_mod.display_ranking = display_by_gender;
my_mod.toggle_view = function(view_type) {
  if (view_type === 'gender') {
    display_by_gender();
  } else {
    display_group_all();
  }
};

return my_mod;
})(d3, CustomTooltip);


module.exports = chart;