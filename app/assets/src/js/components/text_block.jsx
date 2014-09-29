var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var textBlock = React.createClass({

  getDefaultProps: function() {
    return {
      align: "left"
    };
  },

  render: function() {

    var textClass = 'text-block ' + 'align-' + this.props.align;
    return (
      <Grid>
        <Row className={textClass}>
          <Col md={8} mdOffset={2}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = textBlock;
