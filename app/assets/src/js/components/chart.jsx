var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var Chart = React.createClass({

  getDefaultProps: function() {
    return {
      chartId: 'chart',
      figureNum: '',
      footer: '',
      footerShown: false
    };
  },

  render: function() {
    var id = this.props.chartId;

    var footerText =
      'Figure ' +
      this.props.figureNum +
      ': ' +
      this.props.footer
    ;

    footer = this.props.footerShown ?
    <p className='footer'>{footerText}</p> :
    null;

    return (
      <Row className="chart">
        <Col md={10} mdOffset={1}>
          <div id={id} />
          {footer}
        </Col>
      </Row>
    );
  }
});

module.exports = Chart;
