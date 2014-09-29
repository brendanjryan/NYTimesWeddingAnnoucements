var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var headerSubsection = React.createClass({

  getDefaultProps: function() {
    return {
      title: 'Introduction',
      size: 'medium'
    };
  },

  render: function() {


    //var titleClass = 'title-' + {this.props.size};
    return (
      <Row className="header-section">
        <Col md={8} mdOffset={2}>
          <header>
             <h1 className={"title " +this.props.size }>
              {this.props.title}
            </h1>
          </header>
        </Col>
      </Row>
    );
  }
});

module.exports = headerSubsection;
