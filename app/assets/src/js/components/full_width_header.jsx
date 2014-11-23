var React = require('react/addons');

var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

var fullWidthHeader = React.createClass({

  getDefaultProps: function() {
    return {
      title: "put title here",
      subtitle: "put subtitle here"
    };
  },

  render: function() {
    return(
      <Row className='fullWidthHeader'>
      <Col md={12} sm={12} xs={12}>
      <header className="title">{this.props.title}</header>
      <hr />
      <p className="subtitle">{this.props.subtitle}</p>
      <i className="fa fa-angle-down fa-3x "></i>
      </Col>
      </Row>
      );
  }

});

module.exports = fullWidthHeader;