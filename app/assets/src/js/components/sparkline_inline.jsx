var React = require('react/addons');
var $ = require('jQuery');
var d3 = require('d3');

var SparkLine = require('react-sparkline');

var SparkLineInline = React.createClass({

  proptypes: {
    dataPath: React.PropTypes.string.isRequired,
  },

  getDefaultProps: function() {
    return {
      dataPath: '',
      dataKey: ''
    };
  },

  getInitialState: function() {
    return {
      data: []
    };
  },

  componentDidMount: function() {
    if (!this.props.dataPath) {
      return;
    }

    var that = this;
    d3.json(this.props.dataPath, function(values){
      if (that.props.dataKey) {
        var key = '' + that.props.dataKey;
        values.forEach(function(d){
          d[key] = +d[key];
        });
      }
      values = values.map(function(item){return item.count;})

      React.renderComponent(
        <SparkLine data={values} />, that.refs.mount.getDOMNode()
        );
    });
  },

  render: function() {
    return (
      <span className="sparkline" ref='mount'></span>
      );
  }
});

module.exports = SparkLineInline;

