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
 if(! $('.filter-row').length) {
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
      'text': 'Barron\'s Ranking',
      'data-filter': 'ranking'
    }
    )
    );
  filterRow.append(
    $("<a />",
    {
      class: 'filter-button',
      'text': 'NYT Ranking',
      'data-filter': 'frequency'
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
  tooltip = CustomTooltip("school_tooltip", 240),
  layout_gravity = -0.01,
  damper = 0.1,
  nodes = [],
  vis, force, circles, radius_scale;

  var COLORS = ["#578E99", "#A1FFF0", "#FFE1E1", "#CC7183"];
    //var COLORS = ['#d7191c', '#fdae61', '#abd9e9', '#2c7bb6'];

    var MAX_RADIUS = 60;
    var MIN_RADIUS = 2;

    var center = {x: width / 2, y: height / 2};

    var ranking_centers = {
      "1": {x: width / 5, y: height / 2},
      "2": {x: 2 * width / 5, y: height / 2},
      "3": {x: 3 * width / 5, y: height / 2},
      "4" : {x: 4 * width / 5, y: height / 2}
    };
    var frequency_centers = {
      "4": {x: width / 5, y: height / 2},
      "3": {x: 2 * width / 5, y: height / 2},
      "2": {x: 3 * width / 5, y: height / 2},
      "1" : {x: 4 * width / 5, y: height / 2}
    };

    var fill_color = d3.scale.ordinal()
    .domain(["most", "hcplus", "hc", 'vcplus'])
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
        baron_bin: d.baron_bin,
        nyt_bin: d.nyt_bin,
        group: d.ranking,
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
    .attr("fill", function(d) { return fill_color(d.group) ;})
    .attr("stroke-width", 2)
    .attr("stroke", function(d) {return d3.rgb(fill_color(d.group)).darker();})
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
  function display_by_ranking() {
    force.gravity(layout_gravity)
    .charge(charge)
    .friction(0.85)
    .on("tick", function(e) {
      circles.each(move_towards_ranking(e.alpha))
      .attr("cx", function(d) {return d.x;})
      .attr("cy", function(d) {return d.y;});
    });
    force.start();
    //hide_labels();
    //display_rankings();
  }

  function move_towards_ranking(alpha) {
    return function(d) {
      var target = ranking_centers[d.group];
      d.x = d.x + (target.x - d.x) * (damper + 0.07) * alpha * 1.1;
      d.y = d.y + (target.y - d.y) * (damper + 0.07) * alpha * 1.1;
    };
  }

  function display_rankings() {
    var rankings_data = {"1": {width: 160, name : "Most Competitive"}, "2": {width: width / 2, name: "Highly Competitive Plus"}, "3": {width: width - 300, name: "Highly Competitive"}, '4' : {width: width-140, name: "Very Competitive Plus"}};
    var rankings_cats = d3.keys(rankings_data);

    var rankings = vis.selectAll(".rankings")
    .data(rankings_cats);
    rankings.enter().append("text")
    .attr("class", "rankings")
    .attr("x", function(d) { return rankings_data[d].width; }  )
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .text(function(d) { return rankings_data[d].name;});
  }

  function hide_rankings() {
    var rankings = vis.selectAll(".rankings").remove();
  }

  // FREQUENCY CODE
  function display_by_frequency() {
    force.gravity(layout_gravity)
    .charge(charge)
    .friction(0.85)
    .on("tick", function(e) {
      circles.each(move_towards_frequency(e.alpha))
      .attr("cx", function(d) {return d.x;})
      .attr("cy", function(d) {return d.y;});
    });
    force.start();
    //hide_labels();
   // display_frequency();
 }

 function move_towards_frequency(alpha) {
  return function(d) {
    var target = frequency_centers[d.nyt_bin];
    d.x = d.x + (target.x - d.x) * (damper + 0.07) * alpha * 1.1;
    d.y = d.y + (target.y - d.y) * (damper + 0.07) * alpha * 1.1;
  };
}

function display_frequency() {
  var frequency_data = {"1": {width: 160, name : "Most Competitive"}, "2": {width: width / 2, name: "Highly Competitive Plus"}, "3": {width: width - 300, name: "Highly Competitive"}, '4' : {width: width-140, name: "Very Competitive Plus"}};
  var frequency_cats = d3.keys(frequency_data);

  var frequencies = vis.selectAll(".frequencies")
  .data(frequency_cats);
  frequencies.enter().append("text")
  .attr("class", "frequencies")
  .attr("x", function(d) { return frequency_data[d].width; }  )
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .text(function(d) { return frequency_data[d].name;});
}

function hide_frequencies() {
  var frequencies = vis.selectAll(".frequencies").remove();
}


function show_details(data, i, element) {
  d3.select(element).attr("stroke", "black");
  var content = "<span class=\"name\">School:</span><span class=\"value\"> " + data.name + "</span><br/>";
  content +="<span class=\"name\">Amount: </span><span class=\"value\">" + data.value + "</span><br/>";
  tooltip.showTooltip(content, d3.event);
}

function hide_labels() {
  hide_frequencies();
  hide_rankings();
}

function hide_details(data, i, element) {
  d3.select(element).attr("stroke", function(d) { return d3.rgb(fill_color(d.group)).darker();} );
  tooltip.hideTooltip();
}

var my_mod = {};
my_mod.init = function (_data, mount, width, height) {
  custom_chart(_data, mount, width, height);
  start();
};

my_mod.display_all = display_group_all;
my_mod.display_ranking = display_by_ranking;
my_mod.toggle_view = function(view_type) {
  if (view_type === 'ranking') {
    display_by_ranking();
  }
  else if (view_type === 'frequency') {
    display_by_frequency();
  } else {
    display_group_all();
  }
};

return my_mod;
})(d3, CustomTooltip);


module.exports = chart;