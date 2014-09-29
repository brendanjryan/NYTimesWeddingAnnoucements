var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var textBlock = React.createClass({

  getDefaultProps: function() {
    return {
    };
  },

  render: function() {
    return (
      <Grid>
        <Row className="text-block">
          <Col md={8} mdOffset={2}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = textBlock;
