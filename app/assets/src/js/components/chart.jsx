var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var Chart = React.createClass({

  getDefaultProps: function() {
    return {
      chartId: 'chart'
      figureNum: '',
      footer: ''
    };
  },

  render: function() {
    var id = '#' + this.props.chartId;

    var footerText =
      'Figure ' +
      this.props.figureNum +
      ': ' +
      this.props.footer
    ;

    return (
      <Row className="chart">
        <Col md={8} mdOffset={2}>
          <div id={id} />
          <p className='footer'>{footer}</p>
        </Col>
      </Row>
    );
  }
});

module.exports = Chart;
