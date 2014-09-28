var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var Text = React.createClass({

  getDefaultProps: function() {
    return {
      content: "here is some fine young text",
    };
  },

  render: function() {
    return (
      <Grid>
        <Row className="text">
          <Col md={8} mdOffset={2}>
            {this.props.content}
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Text;
