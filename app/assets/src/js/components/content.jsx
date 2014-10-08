var React = require('react/addons');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var Content = React.createClass({


  getDefaultProps: function() {
    return {
    };
  },

  render: function() {
    return(
      <Grid className="content container-fluid">
        {this.props.children}
      </Grid>
    );
  }

});

module.exports = Content;