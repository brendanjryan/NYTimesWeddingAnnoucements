var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var headerMain = React.createClass({

  getDefaultProps: function() {
    return {
      title: 'Introduction',
      number: 1
    };
  },

  render: function() {
    return (
      <Row className="header-main">
        <Col md={8} mdOffset={2}>
          <header>
             <span class="number">{this.props.number}</span>
             <h1 class="title">{this.props.title}</h1>
          </header>
        </Col>
      </Row>
    );
  }
});

module.exports = headerMain;
